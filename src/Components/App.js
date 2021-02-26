import { useState } from "react";
import RootNode from "./RootNode";
import ChildNode from "./ChildNode";
import Storage from "./Storage.js";
import '../css/App.css';
import voiceImage from "../Content/voice.png";

function App() {

  const [rootIndex, setRootIndex] = useState(0);
  const [rootNode, setRootNode] = useState(Storage[rootIndex]);
  const [neighbors, setNeighbors] = useState(rootNode.ramuri.map(node => {
    return {
      id: Storage.findIndex(x => x.link === node),
      link: node,
      title: Storage[Storage.findIndex(x => x.link === node)].title,
      keywords: Storage[Storage.findIndex(x => x.link === node)].keywords
    }
  }).slice(0, -1));

  const handleClick = (index) => {
    const nodes = Storage[index].ramuri.map(node => {
      return {
        id: Storage.findIndex(x => x.link === node),
        link: node,
        title: Storage[Storage.findIndex(x => x.link === node)].title,
        keywords: Storage[Storage.findIndex(x => x.link === node)].keywords
      }
    }).slice(0, -1);

    setRootIndex(index);
    setRootNode(Storage[index]);
    setNeighbors(nodes);
  }

  const buttonClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
    <div className="search-icon">
      <img src={voiceImage} />
    </div>
      <h1 id="app-title">OneLiner</h1>
      <div className="graph-container">
        <RootNode node={rootNode} buttonClick={buttonClick}/>
        <ChildNode nodes={neighbors} handleClick={handleClick} buttonClick={buttonClick} />
      </div>
    </div>
  );
}

export default App;