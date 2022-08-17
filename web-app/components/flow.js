import { useCallback, useState } from "react";
import { ethers } from "ethers";
import ColorSelectorNode from "../components/ColorSelectorNode";
import UtilityNode from "./UtilityNode";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";

const nodeTypes = {
  selectorNode: ColorSelectorNode,
  utilityNode: UtilityNode,
};

const initialNodes = [
  {
    id: "2",
    data: { label: "Collections" },
    position: { x: 100, y: 100 },
    className: "light",
    sourcePosition: "right",
    targetPosition: "left",
    style: {
      backgroundColor: "rgba(98, 106, 223, 0.6)",
      width: 200,
      height: 200,
      boxShadow:
        "box-shadow: 1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #000, 4px 4px 0 #000",
    },
  },
  {
    id: "2a",
    data: { label: "Collection 1" },
    position: { x: 25, y: 50 },
    parentNode: "2",
    style: {
      backgroundColor: "rgba(243, 242, 120, 1)",
    },
  },
  {
    id: "4",
    data: { label: "Utilities" },
    position: { x: 350, y: 100 },
    className: "light",
    sourcePosition: "right",
    targetPosition: "left",
    style: {
      backgroundColor: "rgba(98, 106, 223, 0.6)",
      width: 300,
      height: 300,
    },
  },
  {
    id: "4a",
    data: { label: "Utility 1" },
    position: { x: 25, y: 50 },
    parentNode: "4",
    style: {
      backgroundColor: "rgba(243, 242, 120, 1)",
    },
  },
];

const initialEdges = [
  { id: "e4b1-4b2", source: "4b1", target: "4b2" },
  { id: "e2-4", source: "2", target: "4" },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) =>
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
    [setEdges]
  );

  const getNodeId = () => `randomnode_${+new Date()}`;

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: "selectorNode",
      parentNode: "2",
      data: { label: "Added node" },
      position: {
        x: 25,
        y: 120,
      },
      style: {
        backgroundColor: "rgba(243, 242, 120, 1)",
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onAddUtility = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: "utilityNode",
      parentNode: "4",
      data: { label: "Added node" },
      position: {
        x: 25,
        y: 120,
      },
      style: {
        backgroundColor: "rgba(243, 242, 120, 1)",
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const signMessage = async ({ message }) => {
    try {
      console.log({ message });
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(
        "Linking Collection 1 - 0x63090e54898bBC72293973E58433fa9095E8d555 to access pass, sign transaction"
      );
      const address = await signer.getAddress();

      return {
        message,
        signature,
        address,
      };
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{ width: "90vw", height: "800px" }}>
      <div className="button-holder">
        <button className="btn shadow yellow" onClick={onAdd}>
          Add Collection
        </button>
        <button className="btn shadow yellow" onClick={onAddUtility}>
          Add Utility
        </button>
        <button className="btn shadow yellow" onClick={signMessage}>
          Link
        </button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}

export default Flow;
