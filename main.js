let add = document.getElementById('increment');
let removing = document.getElementById('decrement');
let reset = document.getElementById('reset');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', () => {
  integer += 1;
  int.innerHTML = integer;
})

removing.addEventListener('click', () => {
  integer -= 1;
  int.innerHTML = integer;
})

reset.addEventListener('click', () => {
  integer = 0;
  int.innerHTML = integer;
})