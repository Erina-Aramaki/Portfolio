const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const WesternDao = document.getElementById("WesternDaoImpl");
const factory = document.getElementById("factoryJs");
let stat = false;


function func1() {
  if (stat) {
    image1.classList.add('off');
    image1.classList.remove('on');
  } else {
    image1.classList.add('on');
    image1.classList.remove('off');
  }
  stat = !stat;
}

function func2() {
  if (stat) {
    image2.classList.add('off');
    image2.classList.remove('on');
  } else {
    image2.classList.add('on');
    image2.classList.remove('off');
  }
  stat = !stat;
}

function func3() {
  if (stat) {
    image3.classList.add('off');
    image3.classList.remove('on');
  } else {
    image3.classList.add('on');
    image3.classList.remove('off');
  }
  stat = !stat;
}

function func4() {
  if (stat) {
    image4.classList.add('off');
    image4.classList.remove('on');
  } else {
    image4.classList.add('on');
    image4.classList.remove('off');
  }
  stat = !stat;
}

function func5() {
  if (stat) {
    image5.classList.add('off');
    image5.classList.remove('on');
  } else {
    image5.classList.add('on');
    image5.classList.remove('off');
  }
  stat = !stat;
}

function func6() {
  if (stat) {
    image6.classList.add('off');
    image6.classList.remove('on');
  } else {
    image6.classList.add('on');
    image6.classList.remove('off');
  }
  stat = !stat;
}


function WesternDaoImpl() {
  if (stat) {
    WesternDao.classList.add('off');
    WesternDao.classList.remove('on');
  } else {
    WesternDao.classList.add('on');
    WesternDao.classList.remove('off');
  }
  stat = !stat;
}


function factoryJs() {
  if (stat) {
    factory.classList.add('off');
    factory.classList.remove('on');
  } else {
    factory.classList.add('on');
    factory.classList.remove('off');
  }
  stat = !stat;
}