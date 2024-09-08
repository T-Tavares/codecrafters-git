console.log('Hello, world!');

const backgroundLinks = [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5',
    'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
];

const container = document.querySelector('.container');

const heading = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    heading.style.backgroundColor = 'green';
});

// A quick use of for loop and a setTimeout function as bonus

function changeBackground(index, delay) {
    setTimeout(() => {
        container.style.backgroundImage = `url(${backgroundLinks[index]})`;
    }, delay);
}

for (let i = 0; i < backgroundLinks.length; i++) {
    changeBackground(i, i * 5000);

    /*
      The for loop will run for all the items on the array
      ignoring the delay time. That's why we multiply the delay
      by the index of the for loop. That way even though all the
      iterations will run regardless the delay time. Each one will have
      a higher delay time than the previous one.
   */
}

/* 
  Good reading material to understand a bit more on what's going on on this code
  https://medium.com/@axionoso/watch-out-when-using-settimeout-in-for-loop-js-75a047e27a5f
*/
