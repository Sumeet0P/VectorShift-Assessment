from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import networkx as nx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: list
    edges: list

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    G = nx.DiGraph()
    G.add_nodes_from([n["id"] for n in pipeline.nodes])
    G.add_edges_from([(e["source"], e["target"]) for e in pipeline.edges])

    return {
        "num_nodes": G.number_of_nodes(),
        "num_edges": G.number_of_edges(),
        "is_dag": nx.is_directed_acyclic_graph(G)
    }
