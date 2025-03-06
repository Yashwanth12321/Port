import React, { useEffect, useRef } from "react";
import Sigma from "sigma";
import Graph from "graphology";

const BrainMindMap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const graph = new Graph();

    const mainNodes = [
      { id: "frontend", label: "Frontend Development", x: 0, y: 0, size: 20 },
      { id: "backend", label: "Backend Development", x: 100, y: 0, size: 20 }
    ];

    const childNodes = {
      frontend: [
        { id: "react", label: "React", x: -10, y: -10, size: 10 },
        { id: "angular", label: "Angular", x: 0, y: -20, size: 10 },
        { id: "html", label: "HTML", x: 10, y: -10, size: 10 }
      ],
      backend: [
        { id: "nodejs", label: "Node.js", x: 110, y: -10, size: 10 },
        { id: "django", label: "Django", x: 120, y: 0, size: 10 }
      ]
    };

    graph.clear();

    mainNodes.forEach((node) => {
      graph.addNode(node.id, { label: node.label, x: node.x, y: node.y, size: node.size });
    });
    graph.addEdge("frontend", "backend");

    Object.entries(childNodes).forEach(([parent, children]) => {
      children.forEach((node) => {
        graph.addNode(node.id, { label: node.label, x: node.x, y: node.y, size: node.size });
        graph.addEdge(parent, node.id);
      });
    });

    const sigmaInstance = new Sigma(graph, containerRef.current);

    sigmaInstance.on("enterNode", ({ node }) => {
      graph.forEachNode((n) => {
        graph.setNodeAttribute(n, "color", "lightgray"); // Blur other nodes
      });
      graph.setNodeAttribute(node, "color", "red"); // Keep parent node visible
    });

    sigmaInstance.on("leaveNode", () => {
      graph.forEachNode((n) => {
        graph.setNodeAttribute(n, "color", "black"); // Reset all nodes
      });
    });

    return () => {
      sigmaInstance.kill(); // Cleanup Sigma instance on unmount
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
};

export default BrainMindMap;
