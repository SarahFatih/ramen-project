import React from 'react';
import Ramen from '@au-re/ramen';
const schema = {
  nodeTypes: {
    numberNodeOne: {
      name: "My Node 1",
    },
    numberNodeTwo: {
      name: "My Node 2",
    },
  },
};

const graph = {
  nodes: [
    {
      id: "0",
      x: 100,
      y: 50,
      type: "numberNodeOne",
    },
    {
      id: "1",
      x: 400,
      y: 200,
      type: "numberNodeTwo",
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