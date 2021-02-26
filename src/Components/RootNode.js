import React from "react";

export default function RootNode(props) {
    return (
        <div className="root-div rounded-circle">
          <div className="node-info">
            {
                props.node.keywords.map((word, index) => {
                    return <p key={index}>{word}</p>
                })
            }
            <button className="btn btn-primary"><a href={props.node.link}>Go to link!</a></button>
          </div>
          <h2 id="site-title">{props.node.title}</h2>
        </div>
    );
}