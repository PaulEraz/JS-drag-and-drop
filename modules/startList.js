const list = document.querySelector('#list');

export const richestPeople = [
  'Elon Musk',
  'Jeff Bezos',
  'Bernard Arnault',
  'Bill Gates',
  'Larry Ellison',
  'Larry Page',
  'Sergey Brin',
  'Mark Zuckerberg',
  'Warren Buffett',
  'Mukesh Ambani',
];

const listItems = [];

const startList = () => {
  const randomRichestPeople = richestPeople
    .slice()
    .map(person => ({
      person,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort);

  randomRichestPeople.forEach((person, index) => {
    const li = document.createElement('li');

    li.setAttribute('data-index', index);
    li.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
        <p>${person.person}</p>
        <i class="fas fa-grip-lines"></i>
    </div>
    `;

    listItems.push(li);
    list.appendChild(li);
  });
};

export default startList;
