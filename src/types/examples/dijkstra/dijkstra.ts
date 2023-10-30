import ts from 'typescript';
import Table from 'cli-table';
console.log(ts.version);

interface Edge {
  node: string;
  weight: number;
}

type Graph = Record<string, Edge[]>;

function dijkstra(
  graph: Graph,
  startNode: string,
): Record<string, { distance: number; previous: string | null }> {
  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const priorityQueue = new Set<string>();

  for (const node in graph) {
    if (node === startNode) {
      distances[node] = 0;
    } else {
      distances[node] = Infinity;
    }
    previous[node] = null;
    priorityQueue.add(node);
  }

  while (priorityQueue.size > 0) {
    let smallestDist = Infinity;
    let smallestNode = null;
    for (const node of priorityQueue) {
      if (distances[node] < smallestDist) {
        smallestDist = distances[node];
        smallestNode = node;
      }
    }

    if (!smallestNode) break;

    priorityQueue.delete(smallestNode);

    for (const edge of graph[smallestNode]) {
      const neighbor = edge.node;
      const distance = edge.weight;
      const altDistance = distances[smallestNode] + distance;

      if (altDistance < distances[neighbor]) {
        distances[neighbor] = altDistance;
        previous[neighbor] = smallestNode;
      }
    }
  }

  return Object.keys(distances).reduce((result, node) => {
    result[node] = {
      distance: distances[node],
      previous: previous[node],
    };
    return result;
  }, {} as Record<string, { distance: number; previous: string | null }>);
}

const graph = {
  A0: [
    { node: 'A1', weight: 10 },
    { node: 'A2', weight: 8 },
  ],
  A1: [
    { node: 'A4', weight: 10 },
    { node: 'A7', weight: 7 },
    { node: 'A10', weight: 2 },
  ],
  A2: [
    { node: 'A3', weight: 2 },
    { node: 'A7', weight: 10 },
  ],
  A3: [{ node: 'A6', weight: 10 }],
  A4: [
    { node: 'A5', weight: 10 },
    { node: 'A11', weight: 3 },
  ],
  A5: [
    { node: 'A12', weight: 8 },
    { node: 'A15', weight: 2 },
  ],
  A6: [
    { node: 'A7', weight: 2 },
    { node: 'A9', weight: 3 },
  ],
  A7: [{ node: 'A8', weight: 2 }],
  A8: [
    { node: 'A9', weight: 5 },
    { node: 'A10', weight: 5 },
  ],
  A9: [{ node: 'A13', weight: 8 }],
  A10: [{ node: 'A11', weight: 2 }],
  A11: [
    { node: 'A12', weight: 2 },
    { node: 'A13', weight: 10 },
  ],
  A12: [
    { node: 'A14', weight: 8 },
    { node: 'A15', weight: 5 },
    { node: 'A17', weight: 10 },
  ],
  A13: [{ node: 'A14', weight: 3 }],
  A14: [{ node: 'B', weight: 10 }],
  A15: [{ node: 'A16', weight: 2 }],
  A16: [{ node: 'A17', weight: 2 }],
  A17: [{ node: 'A18', weight: 2 }],
  A18: [{ node: 'A19', weight: 2 }],

  A19: [{ node: 'B', weight: 5 }],
  B: [],
};

function getPath(
  shortestPaths: Record<
    string,
    { distance: number; previous: string | null }
  >,
  targetNode: string,
): string[] {
  const path: string[] = [];
  let currentNode = targetNode;

  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = shortestPaths[currentNode].previous!;
  }

  return path;
}

const startNode = 'A0';
const shortestPaths: Record<
  string,
  { distance: number; previous: string | null }
> = dijkstra(graph, startNode);

console.table(shortestPaths);

const table = new Table({
  head: ['Target Node', 'Distance', 'Path'],
  colWidths: [15, 10, 80], // Adjust colWidths as needed
  style: { 'padding-left': 1 }, // Left-align text
});

for (const targetNode in shortestPaths) {
  const { distance } = shortestPaths[targetNode];
  const path = getPath(shortestPaths, targetNode);
  table.push([targetNode, distance.toString(), path.join(' -> ')]);
}

console.log(table.toString());
