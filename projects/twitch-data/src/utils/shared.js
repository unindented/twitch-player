const getNode = ({ node }) => node;
const getNodeId = ({ node }) => node.id;
const getNodeIds = edges => edges.map(getNodeId).join(",");

export const compareEdges = getEdges => (a, b) => {
  const aEdges = getEdges(a);
  const bEdges = getEdges(b);

  if (aEdges.length !== bEdges.length) {
    return false;
  }
  const aIds = getNodeIds(aEdges);
  const bIds = getNodeIds(bEdges);
  return aIds === bIds;
};

export const extractNodes = getEdges => data => getEdges(data).map(getNode);
