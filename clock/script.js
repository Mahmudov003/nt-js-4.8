//1. Elektron soat yasang. Har sekundda qiymat yangilanib tursin (setInterval dan foydalaning)

let card = document.getElementById("card");
setInterval(() => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  card.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

//2. Timer yasang. 1 Minutdan boshlab orqaga sanasin. Sichqoncha timerni ustiga
// borganda sanashni to'xtatib tursin, ustidan chiqib ketganda, sanashni davom ettirsin

const cardTime = document.getElementById("card2");
let second = 60;

function createInterval() {
    return setInterval(() => {
        second--;
        if (second === 0) clearInterval(interval);
        cardTime.innerHTML = `${second}`;
      }, 1000);
}

let interval = createInterval()


cardTime.addEventListener("mouseenter", () => {
    console.log('mouse enter')
    clearInterval(interval)
});
cardTime.addEventListener("mouseleave", () => {
    console.log('mouse leave')
    interval = createInterval()
});

//3. Argumentdan berilgan sonlardan eng kichigini qaytaruvchi funksiya yozing.
function minim(...arg) {
  return Math.min(...arg);
}
const minValue = minim(22, 23, 34, 55, 6554, 5432, 232, 87);
console.log(minValue);
