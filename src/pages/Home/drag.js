import React, { useState } from 'react';
import MuseDrag from './mUseDrag';
import { useDrop } from 'react-dnd';

const Drag = () => {
  const [dragData, setDragData] = useState([1, 2, 3]);
  const [dropData, setDropData] = useState([]);

  const [_, drop] = useDrop(() => ({
    accept: ['box'],
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      test: monitor.getItem(),
    }),
    drop: ({ data }) => {
      setDropData((state) => [...state, data]);
      setDragData((state) => state.filter((item) => item !== data));
    },
  }));

  const deleteData = (data) => {
    const res = dropData.filter((item) => item !== data);
    setDropData(res);
    setDragData((state) => [...state, data]);
  };
  return (
    <div>
      {dragData.map((item) => (
        <MuseDrag data={item} key={item} />
      ))}
      <div style={{ width: 100, height: 100, border: '1px solid' }} ref={drop}>
        {dropData.map((item) => (
          <span onClick={() => deleteData(item)} key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Drag;
