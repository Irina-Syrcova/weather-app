import { search } from "./search.js";
import { todayInfoData } from "./data/todayInfoData.js";
import { moreDetailsData } from "./data/moreDetailsData.js";
import { hoursData } from "./data/hoursData.js";
import { daysData } from "./data/daysData.js";
import { createTodayInfo } from "./createTodayInfo.js";
import { createMoreDetails } from "./createMoreDetails.js";
import { createSwitchInfo } from "./createHoursInfo.js";

const moreDetailsList = document.querySelector('.weather-today__list')
const hoursList = document.querySelector(".switch__list_hours");
const daysList = document.querySelector(".switch__list_days");
const hoursButton = document.querySelector(".slider__nav-link_hours");
const daysButton = document.querySelector(".slider__nav-link_days");

search();

createTodayInfo(todayInfoData);

moreDetailsData.forEach(function (element) {
	moreDetailsList.append(createMoreDetails(element));
});

hoursButton.addEventListener("click", function() {
	if (!hoursButton.classList.contains("slider__nav-link_active")){
		hoursButton.classList.add("slider__nav-link_active");
	}
	daysButton.classList.remove("slider__nav-link_active");
	daysList.classList.add("switch__list_hidden");
	hoursList.classList.remove("switch__list_hidden");
})

daysButton.addEventListener("click", function() {
	if (!daysButton.classList.contains("slider__nav-link_active")){
		daysButton.classList.add("slider__nav-link_active");
	}
	hoursButton.classList.remove("slider__nav-link_active");
	hoursList.classList.add("switch__list_hidden");
	daysList.classList.remove("switch__list_hidden");
})

hoursData.forEach(function (element) {
	hoursList.append(createSwitchInfo(element));
});

daysData.forEach(function (element) {
	daysList.append(createSwitchInfo(element));
});