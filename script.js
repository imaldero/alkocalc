const weightSlider = document.querySelector(`#svars`);
const weightValue = document.querySelector(`#svarsValue`);
const timeSlider = document.querySelector(`#laiks`);
const timeValue = document.querySelector(`#laiksValue`);
let amountSlider = document.querySelectorAll(`.apjoms`);
let amountValue = document.querySelectorAll(`.apjomsValue`);
const calcBtn = document.querySelector(`#calc-btn`);
const addBtn = document.querySelector(`#add-btn`);
const male = document.querySelector(`#virietis`);
const female = document.querySelector(`#sieviete`);
let drinks = document.querySelectorAll(`.drinks`);
const drinkDiv = document.querySelector(`#drink`);
const result = document.querySelector(`#bac`);
let removeBtn = document.querySelectorAll(`.remove`);
const comment = document.querySelector(`#comment`);
let amountLength = 0;

weightValue.textContent = weightSlider.value + ` Kg`;

weightSlider.oninput = function () {
  weightValue.textContent = this.value + ` Kg`;
};
timeValue.textContent = timeSlider.value + ` H`;

timeSlider.oninput = function () {
  timeValue.textContent = this.value + ` H`;
};

const addFunction = function () {
  amountLength++;
  amountSlider.forEach(function (x, i) {
    amountValue[i].innerHTML = x.value + ` ML`;
    x.addEventListener("input", function (e) {
      amountValue[i].innerHTML = x.value + ` ML`;
    });
  });
};
addFunction();
calcBtn.addEventListener(`click`, function () {
  const weightSlider = document.querySelector(`#svars`);
  const timeSlider = document.querySelector(`#laiks`);
  let amountSlider = document.querySelectorAll(`.apjoms`);
  const male = document.querySelector(`#virietis`);
  const female = document.querySelector(`#sieviete`);
  let drinks = document.querySelectorAll(`.drinks`);
  const result = document.querySelector(`#bac`);
  const comment = document.querySelector(`#comment`);

  let weight,
    amount,
    time = timeSlider.value * 0.15,
    drinksSum = 0,
    amountSum = 0;
  for (let i = 0; i < amountSlider.length; i++) {
    amountSum += +amountSlider[i].value;
    drinksSum += +drinks[i].value;
  }
  if (male.checked) {
    weight = weightSlider.value - weightSlider.value * 0.3;
  } else if (female.checked) {
    weight = weightSlider.value - weightSlider.value * 0.4;
  }
  amount = (amountSum / 100) * drinksSum;
  let bac = amount / weight - time;
  if (bac < 0) {
    bac = 0;
  }
  if (bac === 0) {
    result.textContent = bac;
  } else {
    result.textContent = bac.toFixed(2);
  }

  if (bac < 0.2) {
    comment.textContent = `J??s dr??kstat vad??t transportl??dzekli.`;
  } else if (bac > 0.2 && bac < 0.5) {
    comment.textContent = `J??s dr??kstat vad??t transportl??dzekli, ja jums ir vismaz 2 gadu st????s.`;
  } else if (bac > 0.5 && bac < 5) {
    comment.textContent = `J??s nedr??kstat vad??t transportl??dzekli.`;
  } else {
    comment.textContent = `Jums gan jau vajadz??tu doties uz slimn??cu, jo dr??z b??siet kom??.`;
  }
});

let newDrink = `<div class="new-drink"><div id="drink">
<select name="drinks" class="drinks">
  <option value="0.05" selected>Bezalkoholiskais alus 0.5%</option>
  <option value="4">Viegls alus 4%</option>
  <option value="4.5">Sidrs 4.5%</option>
  <option value="5.2">Alus 5.2%</option>
  <option value="7">Stiprs alus 7%</option>
  <option value="7.5">V??j?? dzirksto??ais v??ns 7.5%</option>
  <option value="9">V??j?? v??ns 9%</option>
  <option value="11">Dzirksto??ais v??ns 11%</option>
  <option value="12">V??ns 12%</option>
  <option value="14">Stiprs v??ns 14%</option>
  <option value="17">V??j?? li??ieris 20%</option>
  <option value="19">Portv??ns 19%</option>
  <option value="20">Li??ieris 20%</option>
  <option value="30">Stiprs li??ieris 30%</option>
  <option value="35">Jagermeister 35%</option>
  <option value="38">Tekila 38%</option>
  <option value="40">Viskijs 40%</option>
  <option value="40">Konjaks 40%</option>
  <option value="40">Brendijs 40%</option>
  <option value="40">??nabis 40%</option>
  <option value="40">Rums 40%</option>
  <option value="45">Balz??ms 45%</option>
  <option value="50">Absints 50%</option>
  <option value="60">Stiprs rums 60%</option>
  <option value="80">??pa??i stiprs rums 80%</option>
  <option value="95">Spirts 95%</option>
</select>
<button class="remove">-</button>
          <div class="labels">
            <label>IZDZERTAIS APJOMS</label>
            <span class="apjomsValue"></span>
          </div>
          <input
            type="range"
            min="50"
            max="2000"
            value="500"
            class="apjoms"
            step="50"
          />
          <div class="maxmin">
            <span>50</span>
            <span>2000</span>
          </div>
        </div>
        </div>`;

addBtn.addEventListener(`click`, function () {
  removeBtn = document.querySelectorAll(`.remove`);
  if (removeBtn.length >= 3) {
    addBtn.disabled = true;
  }
  drinkDiv.insertAdjacentHTML(`beforeend`, newDrink);
  amountSlider = document.querySelectorAll(`.apjoms`);
  amountValue = document.querySelectorAll(`.apjomsValue`);
  addFunction();

  removeBtn = document.querySelectorAll(`.remove`);

  removeBtn.forEach((e) => {
    e.addEventListener(`click`, () => {
      e.parentNode.parentNode.remove();
      addBtn.disabled = false;
    });
  });
});
