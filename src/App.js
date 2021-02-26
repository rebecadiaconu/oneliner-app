import ForceGraph2D from 'react-force-graph-2d';
import react, { useState } from "react";
import data from "./data";
import Heading from "./Components/Heading";
import SiteGraph from "./Components/SiteGraph";
import './App.css';

function App() {

    const [rootIndex, setRootIndex] = useState(0);
    const [currentNode, setCurrentNode] = useState(data[rootIndex]);

    const graphNodes = currentNode.ramuri.map((node, index) => {
      return {
        "id": index,
        "name": data[data.findIndex(x => x.link === node)].title,
        "nodeVal": node,
        "nodeLabel": node
      }
    });

    const graphLinks = graphNodes.map(node => {
      if (node.id != graphNodes.length - 1) {
        return {
          "source": graphNodes.length - 1,
          "target": node.id
        }
      }
    }).slice(0, -1);

    // console.log(graphLinks);

    const dataGraph = {
      "nodes": graphNodes,
      "links": graphLinks
    }

    console.log(dataGraph);

  return (
    <div className="App">
      <Heading />
      <ForceGraph2D 
        graphData={dataGraph} 
        nodeRelSize={10}
        backgroundColor="linen"
        height={800}
      />
    </div>
  );
}

export default App;