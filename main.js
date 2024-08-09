const book = document.querySelector(".book");

const classes = ['', 'open-front-cover', 'open-all', 'open-back-cover', 'show-back-cover', 'show-spine'];
let class_index = 1;

book.addEventListener("click", () => {
  setPositionClass(class_index);
  class_index++
  if (class_index >= classes.length) {
    class_index = 0;
  }
});

function setPositionClass(index) {
  for (let c of classes) {
    if (book.classList.contains(c)) {
      book.classList.remove(c);
    }
  }
  if (index == 0) {
    return;
  }
  book.classList.add(classes[index]);
}
