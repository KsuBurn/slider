const prewButton = document.getElementById('prew-button');
const nextButton = document.getElementById('next-button');
const sliderdListWrap = document.getElementById('inner');
const sliderList = document.getElementsByClassName('slider__picture');
let sliderCounter = 1;


const isLastReward = () => {
  if(sliderCounter === 1) {
    prewButton.classList.add('unActiveButton');
    prewButton.disabled = true;
  } else {
    prewButton.classList.remove('unActiveButton');
    prewButton.disabled = false;
  }

  if(sliderCounter === sliderList.length) {
    nextButton.classList.add('unActiveButton');
    nextButton.disabled = true;
  } else {
    nextButton.classList.remove('unActiveButton');
    nextButton.disabled = false;
  }
};

nextButton.addEventListener('click', () => {
  sliderCounter++;
  sliderdListWrap.scrollLeft += sliderdListWrap.clientWidth;
  isLastReward();
});

prewButton.addEventListener('click', () => {
  sliderCounter--;
  sliderdListWrap.scrollLeft -= sliderdListWrap.clientWidth;
  isLastReward();
});

isLastReward();

