import React, { useEffect, useRef } from "react";
import Sigma from "sigma";
import Graph from "graphology";


const BrainMindMap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const graph = new Graph();

    // Define main categories
    const mainNodes = [
      { id: "software_engineering", label: "Software Engineering", x: 0, y: 0, size: 30 },
      { id: "frontend", label: "Frontend Development", x: -100, y: 50, size: 20 },
      { id: "backend", label: "Backend Development", x: 100, y: 50, size: 20 },
      { id: "devops", label: "DevOps & Cloud", x: -100, y: -50, size: 20 },
      { id: "system_design", label: "System Design & Architecture", x: 100, y: -50, size: 20 },
      { id: "os_networking", label: "Operating Systems & Networking", x: 0, y: -100, size: 20 },
      { id: "databases", label: "Data Engineering & Databases", x: 150, y: 0, size: 20 },
      { id: "cybersecurity", label: "Cybersecurity", x: -150, y: 0, size: 20 },
      { id: "ai_ml", label: "AI & Machine Learning", x: 0, y: 100, size: 20 }
    ];
    
    // Define children for each category
    const childNodes = {
      frontend: [
        { id: "react", label: "React", x: -120, y: 60, size: 10 },
        { id: "angular", label: "Angular", x: -110, y: 70, size: 10 },
        { id: "nextjs", label: "Next.js", x: -130, y: 50, size: 10 }
      ],
      backend: [
        { id: "nodejs", label: "Node.js", x: 120, y: 60, size: 10 },
        { id: "django", label: "Django", x: 130, y: 50, size: 10 },
        { id: "microservices", label: "Microservices", x: 140, y: 40, size: 10 }
      ],
      devops: [
        { id: "docker", label: "Docker", x: -120, y: -40, size: 10 },
        { id: "kubernetes", label: "Kubernetes", x: -130, y: -50, size: 10 },
        { id: "terraform", label: "Terraform", x: -140, y: -60, size: 10 }
      ]
    };

    graph.clear();

    // Add main nodes
    mainNodes.forEach((node) => {
      graph.addNode(node.id, { label: node.label, x: node.x, y: node.y, size: node.size, color: "black" });
    });

    // Connect main categories to the central node
    mainNodes.forEach((node) => {
      if (node.id !== "software_engineering") {
        graph.addEdge("software_engineering", node.id);
      }
    });

    // Add child nodes and edges
    Object.entries(childNodes).forEach(([parent, children]) => {
      children.forEach((node) => {
        graph.addNode(node.id, { label: node.label, x: node.x, y: node.y, size: node.size, color: "gray" });
        graph.addEdge(parent, node.id);
      });
    });

    // Initialize Sigma.js
    const sigmaInstance = new Sigma(graph, containerRef.current);

    // Node hover effect (Highlight selected node)
    sigmaInstance.on("enterNode", ({ node }) => {
      graph.forEachNode((n) => {
        graph.setNodeAttribute(n, "color", "lightgray"); // Dim other nodes
      });
      graph.setNodeAttribute(node, "color", "red"); // Highlight hovered node
    });

    sigmaInstance.on("leaveNode", () => {
      graph.forEachNode((n) => {
        graph.setNodeAttribute(n, "color", "black"); // Reset colors
      });
    });

    // Node click event (Show alert)
    sigmaInstance.on("clickNode", ({ node }) => {
      alert(`You clicked on: ${graph.getNodeAttribute(node, "label")}`);
    });

    return () => {
      sigmaInstance.kill(); // Cleanup on component unmount
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
};

export default BrainMindMap;
