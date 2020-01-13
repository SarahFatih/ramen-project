import Editor, { RamenProvider } from "ramen";

const schema = {
  nodeTypes: {
    numberNode: {
      name: "My Node",
    },
  },
};

const graph = {
  nodes: [
    {
      id: "0",
      x: 100,
      y: 50,
      type: "numberNode",
    }
  ],
  connections: [],
};

const RamenCreator = () => {
  return (
    <Ramen
      schema={schema}
      initialGraph={graph}
      canZoom={false}
      canPan={false}
      height={400}
    />
  )
}


export default RamenCreator;