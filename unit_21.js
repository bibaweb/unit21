// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
  document.querySelector('.out-1').innerHTML += 'touch';
}

const d1 = document.querySelector('.div-1');
d1.addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let sum2 = 0;

function t2() {
  sum2++;
  document.querySelector('.out-2').innerHTML = sum2;
}

const d2 = document.querySelector('.div-2');
d2.addEventListener('touchstart', t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
  document.querySelector('.out-3').innerHTML = event.target.innerHTML;
}

const d31 = document.querySelector('.div-3_1');
const d32 = document.querySelector('.div-3_2');
d31.addEventListener('touchstart', t3);
d32.addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4(event) {
  console.log(event);
  document.querySelector('.out-4').innerHTML += 'touch';
}

const b4 = document.querySelector('.b-4');
const d4 = document.querySelector('.div-4');
b4.addEventListener('touchstart', () => {
  d4.addEventListener('touchstart', t4);
});
//Второй вариант
// b4.ontouchstart = function () {
//   d4.addEventListener('touchstart', t4);
//   console.log('touchh');
// };

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
  d4.removeEventListener('touchstart', t4);
}

const b5 = document.querySelector('.b-5');
b5.addEventListener('touchstart', t5);
//Второй вариант
// b5.ontouchstart = function () {
//   d4.removeEventListener('touchstart', t4);
//   console.log('stop');
// };

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
  document.querySelector('.out-4').innerHTML += 'touchend';
}

d4.addEventListener('touchend', t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
  d7.style.background = 'red';
}

const d7 = document.querySelector('.div-7');
d7.addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании 
окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
  d8.style.background = a8[Math.floor(Math.random() * a8.length)];
}

const d8 = document.querySelector('.div-8');
d8.addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
  console.log(event);
  document.querySelector('.out-9').innerHTML += event.targetTouches.length;
}

const d9 = document.querySelector('.div-9');
d9.addEventListener('touchstart', t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10() {
  d10.style.width = w10 + 'px';
  w10++;
}

const d10 = document.querySelector('.div-10');
let w10 = d10.offsetWidth;
d10.addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
  console.log(event.changedTouches[0]);
  //Total bullshit
  let touch = event.changedTouches[0];
  document.querySelector('.out-11').innerHTML +=
    touch.radiusX + ' ' + touch.radiusY;
}

const d11 = document.querySelector('.div-11');
d11.ontouch = t11;
d11.addEventListener('touchstart', t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const resetB = document.querySelector('.reset');
const mainImg = document.querySelector('.img-12-max');


next.addEventListener('touchend', function (e) {
  e.stopPropagation()
  e.preventDefault() 
  nextFunction(); 
});
next.addEventListener('click', nextFunction);

prev.addEventListener('touchend', function (e) {
  e.stopPropagation()
  e.preventDefault() 
  prevFunction(); 
});
prev.addEventListener('click', prevFunction);

resetB.addEventListener('touchend', function (e) {
  e.stopPropagation()
  e.preventDefault() 
  resetFunction(); 
});
resetB.addEventListener('click', resetFunction);



function nextFunction() {
  images[count].classList.remove('active-img');
  if (count === images.length - 1) {
    count = 0
  } else {
    count++;
  }
  images[count].classList.add('active-img');
  changeMain(images[count])
}

function prevFunction() {
  images[count].classList.remove('active-img');
  if (count === 0) {
    count = images.length - 1;
  } else {
    count--;
  }
  images[count].classList.add('active-img');
  changeMain(images[count])
}

function resetFunction() {
  images[count].classList.remove('active-img');
  count = 0;
  images[count].classList.add('active-img');
  changeMain(images[count])
}

function changeMain(pic) {
  mainImg.src = pic.src;
}