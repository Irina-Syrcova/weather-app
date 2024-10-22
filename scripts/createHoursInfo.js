const hoursInfoTemplate = document.querySelector('#switch-template').content;

export function createSwitchInfo(data) {
  const hoursInfoElement = hoursInfoTemplate.cloneNode(true);
  hoursInfoElement.querySelector(".switch__card-time").textContent = data.time;
  hoursInfoElement.querySelector(".switch__card-image").alt = data.alt;
  hoursInfoElement.querySelector(".switch__card-image").src = data.img;
  hoursInfoElement.querySelector(".switch__card-text").textContent = data.temp;
  
  return hoursInfoElement;
}