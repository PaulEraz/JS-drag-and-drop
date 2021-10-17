import { dragStart, dragOver, dragDrop, dragEnter, dragLeave } from './drag.js';
import checkOrder from './checkOrder.js';

const addEventListeners = () => {
  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach(draggable =>
    draggable.addEventListener('dragstart', dragStart)
  );

  const li = document.querySelectorAll('li');
  li.forEach(li => {
    li.addEventListener('dragover', dragOver);
    li.addEventListener('drop', dragDrop);
    li.addEventListener('dragenter', dragEnter);
    li.addEventListener('dragleave', dragLeave);
  });

  const btn = document.querySelector('#check');
  btn.addEventListener('click', checkOrder);
};

export default addEventListeners;
