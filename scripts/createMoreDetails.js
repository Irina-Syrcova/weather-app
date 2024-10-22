const moreDetailsTemplate = document.querySelector('#more-details-template').content;

export function createMoreDetails(moreDetailsData) {
	const moreDetailsElement = moreDetailsTemplate.cloneNode(true);
	const moreDetailsContainer = moreDetailsElement.querySelector('.more-details__container');
	const progressbar = moreDetailsElement.querySelector('.progressbar');

	moreDetailsElement.querySelector('.more-details__values-title').textContent = moreDetailsData.title;
	moreDetailsElement.querySelector('.more-details__values-image').src = moreDetailsData.image;
	moreDetailsElement.querySelector('.more-details__values-image').alt = moreDetailsData.title;
	moreDetailsElement.querySelector('.more-details__values-value').textContent = moreDetailsData.value;
	moreDetailsElement.querySelector('.more-details__text_first').textContent = moreDetailsData.text1;
	moreDetailsElement.querySelector('.more-details__text_second').textContent = moreDetailsData.text2;
	progressbar.setAttribute('style', `background-image: radial-gradient(circle at ${moreDetailsData.bar}% center, #F5F4F4 4px, transparent 4px 6px, rgb(218, 218, 218, 0.4) 6px)`);

	if (screen.width < 767) {
		progressbar.setAttribute('style', `background-image: radial-gradient(circle at ${moreDetailsData.bar}% center, #F5F4F4 3px, transparent 3px 5px, rgb(218, 218, 218, 0.4) 5px)`);
	}

	if (moreDetailsData.text2) {
		moreDetailsContainer.classList.add('more-details__container_center');
	}

	if (moreDetailsData.title === "Рассвет" || moreDetailsData.title === "Закат" || moreDetailsData.title === "Сила ветра") {
		progressbar.classList.add('progressbar_hidden');
	}

	if (moreDetailsData.title === "Давление") {
		progressbar.setAttribute('style', `background-image: radial-gradient(circle at ${moreDetailsData.bar}% center, #F5F4F4 4px, transparent 4px 6px), radial-gradient(circle at center center, rgba(84, 84, 84, 0.4) 0, rgba(138, 138, 138, 0.4) 45%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%)`);
		if (screen.width < 767) {
			progressbar.setAttribute('style', `background-image: radial-gradient(circle at ${moreDetailsData.bar}% center, #F5F4F4 3px, transparent 3px 5px, rgb(218, 218, 218, 0.4) 5px), radial-gradient(circle at center center, rgba(84, 84, 84, 0.4) 0, rgba(138, 138, 138, 0.4) 45%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%)`);
		}
	}

	return moreDetailsElement;
}