const podzimElm = document.querySelector('.podzim');
const holidayOfAutumn = dayjs('2023-10-23');
const now = dayjs();

if (now.isAfter(holidayOfAutumn)) {
  podzimElm.innerHTML += '<h1>Musíš počkat na příští rok</h1>';
} else {
  podzimElm.innerHTML += '<h1>Už brzy budou podzimní prázdniny</h1>';
}
podzimElm.innerHTML += '<img src="autumn.jpg" alt="podzim">';
