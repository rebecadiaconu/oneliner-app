import React from "react";

export default function ChildNode(props) {
    return (
        <div className="children-container">
            {
                props.nodes.map(node => {
                    return (<div key={node.id} className="children-div rounded-circle" onClick={() => props.handleClick(node.id)}>
                                <div className="node-info">
                                    {
                                        node.keywords.map((word, index) => {
                                            return <p key={index}>{word}</p>
                                        })
                                    }
                                    <button className="btn btn-primary">
                                        <a href={node.link}>Go to link!</a>
                                    </button>
                                </div>
                                <h2 id="site-title">{node.title}</h2>
                            </div>);
                })
            }
        </div>
    );
}