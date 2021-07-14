import React from 'react';
import { useDrag } from 'react-dnd';

const MuseDrag = ({ data }) => {
  const [_, dragger] = useDrag({ type: 'box', item: { data } });
  return (
    <div ref={dragger} style={{ width: 50, height: 50, border: '1px solid' }}>
      {data}
    </div>
  );
};

export default MuseDrag;
