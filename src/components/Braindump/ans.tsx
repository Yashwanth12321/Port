import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Node {
  id: string;
  label: string;
  expanded: boolean;
  children: string[];
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface Link {
  source: string | Node;
  target: string | Node;
}


const BrainMindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    
const initialNodes: Node[] = [
  { id: "1", label: "Main Topic", expanded: false, children: ["2", "3"] },
  { id: "2", label: "Subtopic 1", expanded: false, children: ["4", "5"] },
  { id: "3", label: "Subtopic 2", expanded: false, children: [] },
  { id: "4", label: "Detail A", expanded: false, children: [] },
  { id: "5", label: "Detail B", expanded: false, children: [] }
];

const initialLinks: Link[] = [
  { source: "1", target: "2" },
  { source: "1", target: "3" },
  { source: "2", target: "4" },
  { source: "2", target: "5" }
];
    let nodes: Node[] = [...initialNodes];
    let links: Link[] = [...initialLinks];

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height/2)
      .append("g");

    const simulation = d3
      .forceSimulation<Node, Link>(nodes)
      .force("link", d3.forceLink<Node, Link>(links).id((d) => d.id))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg
      .selectAll<SVGLineElement, Link>(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1);

    const node = svg
      .selectAll<SVGCircleElement, Node>(".node")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 10)
      .attr("fill", "steelblue")
      .call(
        d3
          .drag<SVGCircleElement, Node>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      )
      .on("mouseover", function () {
        d3.select(this).attr("fill", "violet").attr("r", 15);
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "purple").attr("r", 10);
      });

    node.append("title").text((d) => d.label);

    const label = svg
      .selectAll<SVGTextElement, Node>(".label")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .attr("fill", "#ccc")
      .text((d) => d.label);

    function dragstarted(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    function ticked() {
      link
        .attr("x1", (d) => (d.source as Node).x || 0)
        .attr("y1", (d) => (d.source as Node).y || 0)
        .attr("x2", (d) => (d.target as Node).x || 0)
        .attr("y2", (d) => (d.target as Node).y || 0);

      node.attr("cx", (d) => d.x || 0).attr("cy", (d) => d.y || 0);

      label.attr("x", (d) => d.x || 0).attr("y", (d) => d.y || 0);
    }

    simulation.on("tick", ticked);

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 10])
      .on("zoom", (event) => {
        svg.attr("transform", event.transform.toString());
      });

    d3.select(svgRef.current!).call(zoom);

    node.on("click", function (_event, d) {
      if (d.children.length > 0 && !d.expanded) {
        d.expanded = true;
        const newNodes: Node[] = [];
        d.children.forEach((childId) => {
          if (!nodes.find((n) => n.id === childId)) {
            const newNode: Node = {
              id: childId,
              label: `Detail ${childId}`,
              expanded: false,
              children: [],
            };
            newNodes.push(newNode);
            links.push({ source: d.id, target: childId });
          }
        });

        nodes = nodes.concat(newNodes);

        const newLink = svg
          .selectAll<SVGLineElement, Link>(".link")
          .data(links, (d) => `${(d.source as Node).id}-${(d.target as Node).id}`)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "#ccc")
          .attr("stroke-width", 1);

        const newNode = svg
          .selectAll<SVGCircleElement, Node>(".node")
          .data(nodes, (d) => d.id)
          .join("circle")
          .attr("class", "node")
          .attr("r", 10)
          .attr("fill", "steelblue")
          .call(
            d3
              .drag<SVGCircleElement, Node>()
              .on("start", dragstarted)
              .on("drag", dragged)
              .on("end", dragended)
          );

        const newLabel = svg
          .selectAll<SVGTextElement, Node>(".label")
          .data(nodes, (d) => d.id)
          .join("text")
          .attr("class", "label")
          .attr("dx", 12)
          .attr("dy", ".35em")
          .attr("fill", "#ccc")
          .text((d) => d.label);

        simulation.nodes(nodes);
        simulation.force("link")?.links(links);
        simulation.alpha(1).restart();
      }
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BrainMindMap;