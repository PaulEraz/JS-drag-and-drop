const list = document.querySelector('#list');
const btn = document.querySelector('#check');

const richestPeople = [
  'Elon Musk',
  'Jeff Bezos',
  'Bernard Arnault',
  'Bill Gates',
  'Larry Ellison',
  'Larry Page',
  'Sergey Brin',
  'Mark Zickerberg',
  'Warren Buffett',
  'Mukesh Ambani',
];

const listItems = [];

const startList = () => {
  [...richestPeople].forEach((person, index) => {
    const li = document.createElement('li');

    li.setAttribute('data-index', index);
    li.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
    </div>
    `;

    listItems.push(li);

    list.appendChild(li);
  });
};

startList();
