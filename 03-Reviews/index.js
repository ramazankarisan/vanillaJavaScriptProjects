// local reviews 

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: './images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur omnis architecto voluptatem! Tempore eius inventore dolorem, itaque voluptatem facilis voluptatum. Ad doloribus, perspiciatis molestias minus unde culpa quam perferendis!'
  },
  {
    id: 2,
    name: 'john doe',
    job: 'designer',
    img: './images/ben-parker-OhKElOkQ3RE-unsplash.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur omnis architecto voluptatem! Tempore eius inventore dolorem, itaque voluptatem facilis voluptatum. Ad doloribus, perspiciatis molestias minus unde culpa quam perferendis!'
  },
  {
    id: 3,
    name: 'max mustermann',
    job: 'data scientitst',
    img: './images/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur omnis architecto voluptatem! Tempore eius inventore dolorem, itaque voluptatem facilis voluptatum. Ad doloribus, perspiciatis molestias minus unde culpa quam perferendis!'
  },
]

// select items
const image = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;

// load initial
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem)

})

// show person based on item

function showPerson() {
  const item = reviews[currentItem];
  image.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text
}

// show next person
nextBtn.addEventListener('click', () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})

// show prev person
prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson()
})

// random

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem);
  showPerson()
})