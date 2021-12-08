// set initial count

let count = 0;

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const styles = e.target.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('reset')) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green'
    } else if (count < 0) {
      value.style.color = 'red'
    } else {
      value.style.color = 'black'
    }
    value.innerText = count


  })
})