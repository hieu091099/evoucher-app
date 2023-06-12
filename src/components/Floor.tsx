import Matter from 'matter-js';
import React from 'react';
import { View } from 'react-native';

const Floor = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody;

  const color = props.color;

  return (
    <View
      style={{
        position: 'absolute',
        left: xBody - 15,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    >
      {/* Render any other components or content here */}
      <View style={{ backgroundColor: 50, flex: 1 }} >
      </View>
    </View>
  );
};

export default (world, color, pos, size) => {
  const initialFloor = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height, {
    label: 'Floor',
    isStatic: true,
  });
  Matter.World.add(world, initialFloor);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />,
  };
};