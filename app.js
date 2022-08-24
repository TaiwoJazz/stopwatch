
const btns = document.querySelectorAll(".btn");
const items = document.querySelectorAll('.timer h2')

let minutes = 0;
let seconds = 0;
let miliSeconds = 0;

btns.forEach(function (e) {
  e.addEventListener("click", function () {
    var x = parseInt(e.dataset.id);
    if (x === 1) {
      stop = setInterval(countMiliseconds, 10);
    } else if (x === 2) {
      clearInterval(stop);
    } else {
      clearInterval(stop);
      resetValue();
    }
  });
});

const countMiliseconds = () => {
  miliSeconds++;
  if (miliSeconds == 99) {
    miliSeconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  displayStopWatch();
};

const resetValue = () => {
  minutes = 0;
  seconds = 0;
  miliSeconds = 0;
  items.textContent = displayStopWatch();
};

const displayStopWatch = () => {
  const values = [minutes, seconds, miliSeconds]
  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  };
  
  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });
}
displayStopWatch();