import { richestPeople } from './startList.js';

const checkOrder = () => {
  const list = [...document.querySelectorAll('li')];
  list.forEach((li, index) => {
    const person = li.querySelector('.draggable').innerText;
    if (person === richestPeople[index]) {
      li.classList.add('right');
      li.classList.remove('wrong');
    } else {
      li.classList.add('wrong');
      li.classList.remove('right');
    }
  });
};

export default checkOrder;
