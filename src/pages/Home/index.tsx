import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from './drag.js';

const DragMain = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Drag />
    </DndProvider>
  );
};

export default DragMain;
