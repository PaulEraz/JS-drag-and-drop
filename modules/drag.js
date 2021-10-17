let dragStartIndex;
let dragEndIndex;

export const dragStart = e => {
  dragStartIndex = +e.target.closest('li').getAttribute('data-index');
};

export const dragOver = e => {
  e.preventDefault();
};

export const dragDrop = e => {
  dragEndIndex = +e.target.closest('li').getAttribute('data-index');

  const swapLiIndex = (dragStartIndex, dragEndIndex) => {
    const list = [...document.querySelectorAll('li')];

    const startLi = list[dragStartIndex].querySelector('.draggable');
    const endLi = list[dragEndIndex].querySelector('.draggable');

    list[dragStartIndex].appendChild(endLi);
    list[dragEndIndex].appendChild(startLi);
  };
  swapLiIndex(dragStartIndex, dragEndIndex);
  e.target.classList.remove('over');
};

export const dragEnter = e => {
  e.target.classList.add('over');
};

export const dragLeave = e => {
  e.target.classList.remove('over');
};
