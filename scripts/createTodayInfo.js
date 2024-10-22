const location = document.querySelector(".info__date-location");
const day = document.querySelector(".info__date-day");
const time = document.querySelector(".info__date-time");
const temp = document.querySelector(".info__temp");
const weatherImg = document.querySelector(".info__other-image");
const text = document.querySelector(".info__other-text");
const feel = document.querySelector(".info__other-feel");

export function createTodayInfo(todayInfoData) {
  location.textContent = todayInfoData.location;
	day.textContent = todayInfoData.day;
	time.textContent = todayInfoData.time;
	temp.textContent = todayInfoData.temp;
	weatherImg.alt = todayInfoData.text;
	weatherImg.src = todayInfoData.image;
	text.textContent = todayInfoData.text;
	feel.textContent = todayInfoData.feel;
}