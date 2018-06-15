var imgWrapper = document.getElementById('imgWrapper');
var leftPic = document.getElementById('leftPic');
var middlePic = document.getElementById('middlePic');
var rightPic = document.getElementById('rightPic');

var startBtn = document.getElementById('startBtn');

var path = 'img/';
var rawData = ['bird.png', 'blue.jpg', 'car.jpg', 'crocodile.png', 'eagle.jpeg', 'game.jpg', 'mario.png', 'plane.jpg', 'race.jpeg', 'sonic.png'];

var pageState = {
  start: false,
  leftPic: 0,
  middlePic: 0,
  rightPic: 0,
  totalClicks: 0
};

var images = [];

startBtn.addEventListener('click', function(){
  pageState.start = true;
  populateImages();
  imgWrapper.addEventListener('click', wrapperListener);
  pageState.totalClicks = 0;

});

getState();

function Image(data){
  this.fileName = path + data;
  this.shown = 0;
  this.clicks = 0;
}

function initImages(arr){
  images = arr.map(function(ele){
    return new Image(ele);
  });
}

function getNums(num){
  var firstNum = Math.floor(Math.random() * num);
  do {
    var secondNum = Math.floor(Math.random() * num);
  } while (secondNum === firstNum);
  do {
    var thirdNum = Math.floor(Math.random() * num);
  } while (thirdNum === firstNum || thirdNum === secondNum);
  return [firstNum, secondNum, thirdNum];
}

function populateImages(){
  var arrayRandomNums = getNums(images.length);

  leftPic.setAttribute('src', images[arrayRandomNums[0]].fileName);
  pageState.leftPic = arrayRandomNums[0];
  images[arrayRandomNums[0]].shown++;

  middlePic.setAttribute('src', images[arrayRandomNums[1]].fileName);
  pageState.middlePic = arrayRandomNums[1];
  images[arrayRandomNums[1]].shown++;

  rightPic.setAttribute('src', images[arrayRandomNums[2]].fileName);
  pageState.rightPic = arrayRandomNums[2];
  images[arrayRandomNums[2]].shown++;
}

function wrapperListener(ev){
  if (ev.target.childElementCount === 0){
    var clickedImage = ev.target.id;
    console.log(ev.target.id); // this will show leftPic, middle, or rightPic.
    var imageIndex = pageState[clickedImage];
    images[imageIndex].clicks++;
    pageState.totalClicks++;
    populateImages();
    saveState();
    if (pageState.totalClicks === 10){
      console.log(images);
      imgWrapper.removeEventListener('click', wrapperListener);
      pageState.start = false;
    }
  }
}

function saveState(){
  localStorage.pageState = JSON.stringify(pageState);
  localStorage.images = JSON.stringify(images);

}

function getState(){
  if (localStorage.images){
    images = JSON.parse(localStorage.images);
  } else {
    initImages(rawData);
    return;
  }
  if (localStorage.pageState){
    pageState = JSON.parse(localStorage.pageState);
    if(pageState.start){
      leftPic.setAttribute('src', images[pageState.leftPic].fileName);
      middlePic.setAttribute('src', images[pageState.middlePic].fileName);
      rightPic.setAttribute('src', images[pageState.rightPic].fileName);
      imgWrapper.addEventListener('click', wrapperListener);
    }
  }
}
