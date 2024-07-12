// Main function that will handle the functionality of updating UI of user's trips
export function updateUI(projectData) {
    const myTrips = document.querySelector('.my-trips');
    myTrips.style.display = 'block';
    const statsSection = document.querySelector('.statistics');
    statsSection.style.marginTop ='0';
    const myTripsContent = document.querySelector('.my-trips-content');
    const newTrip = document.createElement('section');
    newTrip.className = 'trip';
    const frontSide = document.createElement('div');
    frontSide.className = 'trip-front';
    const backSide = document.createElement('div');
    backSide.className = 'trip-back';
    newTrip.appendChild(frontSide);
    newTrip.appendChild(backSide);
    newTrip.insertAdjacentHTML('afterbegin','<h3 class="firstHeading">Adventure Awaits</h3>');
    const frontSideDetails = document.createElement('div');
    frontSideDetails.className = 'front-side-details';
    frontSide.appendChild(frontSideDetails);
    const detailsHeading = document.createElement('h3');
    detailsHeading.textContent = ' Trip Details';
    frontSideDetails.appendChild(detailsHeading);
    const location = document.getElementById('location').value;
    const locationElement = document.createElement('p');
    const locationSpan = document.createElement('span');
    locationSpan.textContent = location;
    locationElement.textContent = 'Location: ';
    locationElement.appendChild(locationSpan);
    frontSideDetails.appendChild(locationElement);
    const startDate = document.getElementById('start-date').value;
    const startDateElement = document.createElement('p');
    startDateElement.textContent = 'Start Date: ';
    const startDateSpan = document.createElement('span');
    startDateSpan.textContent = startDate;
    startDateElement.appendChild(startDateSpan);
    frontSideDetails.appendChild(startDateElement);
    const endDate = document.getElementById('end-date').value;
    const endDateElement = document.createElement('p');
    endDateElement.textContent = 'End Date: ';
    const endDateSpan = document.createElement('span');
    endDateSpan.textContent = endDate;
    endDateElement.appendChild(endDateSpan);
    frontSideDetails.appendChild(endDateElement);
    const lengthOfTrip = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000*60*60*24);
    const lengthOfTripElement = document.createElement('p');
    lengthOfTripElement.textContent = `Trip Length: `;
    const lengthOfTripSpan = document.createElement('span');
    lengthOfTripSpan.className = 'trip-length';
    lengthOfTripSpan.textContent = lengthOfTrip;
    if(lengthOfTripSpan.innerHTML > 1) {
        lengthOfTripSpan.innerHTML += " days";
    }
    else {
        lengthOfTripSpan.innerHTML += " day";
    }
    lengthOfTripElement.appendChild(lengthOfTripSpan);
    frontSideDetails.appendChild(lengthOfTripElement);
    const travelers = document.getElementById('travelers').value;
    const travelersElement = document.createElement('p');
    travelersElement.textContent = 'Number Of Travelers: ';
    const travelersSpan = document.createElement('span');
    travelersSpan.textContent = travelers;
    travelersElement.appendChild(travelersSpan);
    frontSideDetails.appendChild(travelersElement);
    const accommodation = document.getElementById('accommodation').value;
    const accommodationElement = document.createElement('p');
    accommodationElement.textContent = 'Accommodation Preferences: ';
    const accommodationSpan = document.createElement('span');
    accommodationSpan.textContent = accommodation;
    accommodationElement.appendChild(accommodationSpan);
    frontSideDetails.appendChild(accommodationElement);
    const transportation = document.getElementById('transportation').value;
    const transportationElement = document.createElement('p');
    transportationElement.textContent = 'Transportation Preferences: ';
    const transportationSpan = document.createElement('span');
    transportationSpan.textContent = transportation;
    transportationElement.appendChild(transportationSpan);
    frontSideDetails.appendChild(transportationElement);
    const frontSideImg = document.createElement('div');
    frontSideImg.className = 'front-side-img';
    const imgHeading = document.createElement('h3');
    imgHeading.textContent = 'Location Photo';
    frontSideImg.appendChild(imgHeading);
    frontSideImg.insertAdjacentHTML('afterbegin',
        `<img src="${projectData.image}" alt="Location Photo" />`
    );
    frontSide.appendChild(frontSideImg);
    frontSideImg.insertAdjacentHTML('afterend',`<div class="weather-info">
        <h3>Weather Info</h3>
        <p class="temp">Temperature: <span>${projectData.temperature} C°</span></p>
        <img id="icon" src="https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png" alt="weather icon"/>
        <p class="description">${projectData.description}</p>
    </div>`);
    const backSideDetails = document.createElement('div');
    backSideDetails.className = 'back-side-details';
    backSide.appendChild(backSideDetails);
    const activities = document.getElementById('activities').value;
    const activitiesElement = document.createElement('p');
    activitiesElement.textContent = 'Activities/Interests: ';
    const activitiesSpan = document.createElement('span');
    activitiesSpan.textContent = activities;
    activitiesElement.appendChild(activitiesSpan);
    backSideDetails.appendChild(activitiesElement);
    const budget = document.getElementById('budget').value;
    const budgetElement = document.createElement('p');
    budgetElement.textContent = 'Estimated Budget: ';
    const budgetSpan = document.createElement('span');
    budgetSpan.textContent =budget;
    budgetElement.appendChild(budgetSpan);
    backSideDetails.appendChild(budgetElement);
    const requirements = document.getElementById('special-requirements').value;
    const requirementsElement = document.createElement('p');
    requirementsElement.textContent = 'Special Requirements: ';
    const requirementsPara = document.createElement('p');
    requirementsPara.textContent = requirements;
    requirementsElement.appendChild(requirementsPara);
    backSideDetails.appendChild(requirementsElement);
    const contact = document.getElementById('contact-info').value;
    const contactElement = document.createElement('p');
    contactElement.textContent = 'Contact Information: ';
    const contactSpan = document.createElement('span');
    contactSpan.textContent = contact;
    contactElement.appendChild(contactSpan);
    backSideDetails.appendChild(contactElement);
    const notes = document.getElementById('notes').value;
    const notesElement = document.createElement('p');
    notesElement.textContent = 'Additional Notes: ';
    const notesPara = document.createElement('p');
    notesPara.textContent = notes;
    notesElement.appendChild(notesPara);
    backSideDetails.appendChild(notesElement);
    const backSideCountDown = document.createElement('div');
    backSideCountDown.className = 'back-side-countdown';
    const heading = document.createElement('h4');
    heading.textContent = 'Countdown';
    backSideCountDown.appendChild(heading);
    backSide.appendChild(backSideCountDown);
    // Countdown timer
    let countdownDate = new Date(startDate).getTime();
    countdownInterval(countdownDate, backSideCountDown);
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Trip';
    printButton.addEventListener('click', function() {
        window.print();
    });
    printButton.className = 'print';
    buttonsContainer.appendChild(printButton);
    const AddButton = document.createElement('button');
    AddButton.textContent = 'New Trip';
    AddButton.addEventListener('click', function() {
        const form = document.querySelector('.get-started-content');
        form.scrollIntoView({
            behavior:'smooth'
        })
    });
    AddButton.className = 'add';
    buttonsContainer.appendChild(AddButton);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Trip';
    removeButton.addEventListener('click', function() {
        const trip = document.querySelector('.trip');
        trip.parentNode.removeChild(trip);
    });
    removeButton.className ='remove';
    buttonsContainer.appendChild(removeButton);
    backSide.appendChild(buttonsContainer);
    myTripsContent.appendChild(newTrip);
    myTrips.scrollIntoView({
        behavior:'smooth'
    });
    dynamicCountDown(endDate);
}

// Function that handle the countdown for the trip
let countdownInterval = function(countdownDate, backSideCountDown) {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
    const countdownElement = document.createElement('p');
    countdownElement.className = 'countdown';
    const daysSpan = document.createElement('span');
    daysSpan.textContent = days;
    daysSpan.className = 'Days';
    countdownElement.appendChild(daysSpan);
    const hoursSpan = document.createElement('span');
    hoursSpan.textContent = hours;
    hoursSpan.className = 'Hours';
    countdownElement.appendChild(hoursSpan);
    const minutesSpan = document.createElement('span');
    minutesSpan.textContent = minutes;
    minutesSpan.className = 'Minutes';
    countdownElement.appendChild(minutesSpan);
    const secondsSpan = document.createElement('span');
    secondsSpan.textContent = seconds;
    secondsSpan.className = 'Seconds';
    countdownElement.appendChild(secondsSpan);
    backSideCountDown.appendChild(countdownElement);
}

// Function that will animate the countdown
function dynamicCountDown(endDate) {
    const daysSpan = document.querySelector('.Days');
    const hoursSpan = document.querySelector('.Hours');
    const minutesSpan = document.querySelector('.Minutes');
    const secondsSpan = document.querySelector('.Seconds');

    function updateUI() {
        const now = new Date().getTime();
        const distance = new Date(endDate).getTime() - now;

        if (distance < 0) {
            clearInterval(timer);
            document.querySelector('.countdown').innerHTML = 'EXPIRED!!!';
            document.querySelector('.firstHeading').innerHTML = 'EXPIRED!!!';
            document.querySelector('.firstHeading').style.color = '#f44336';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = days;
        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes;
        secondsSpan.textContent = seconds;
    }

    const timer = setInterval(updateUI, 1000);
    updateUI(); // Initial call to set the values immediately
}

// Function that will handle country information section
export function countryInfo(projectData) {
    const mainHeadingSpan = document.querySelector('.mainHeading span');
    mainHeadingSpan.textContent = projectData.country;
    const country = document.createElement('div');
    country.className = 'country';
    const countryInfoContent = document.querySelector('.country-info-content');
    countryInfoContent.appendChild(country);
    const countryHeading = document.createElement('h3');
    countryHeading.textContent = 'Travel Essentials';
    country.appendChild(countryHeading);
    const officialName = document.createElement('p');
    officialName.textContent = 'Official Name: ';
    const officialNameSpan = document.createElement('span');
    officialNameSpan.textContent = projectData.officialName;
    officialName.appendChild(officialNameSpan);
    country.appendChild(officialName);
    const cioc = document.createElement('p');
    cioc.textContent = 'CIOC Code: ';
    const ciocSpan = document.createElement('span');
    ciocSpan.textContent = projectData.cioc;
    cioc.appendChild(ciocSpan);
    country.appendChild(cioc);
    const callingCode = document.createElement('p');
    callingCode.textContent = 'Calling Code: ';
    const callingCodeSpan = document.createElement('span');
    callingCodeSpan.textContent = projectData.callingCode;
    callingCode.appendChild(callingCodeSpan);
    country.appendChild(callingCode);
    const capital = document.createElement('p');
    capital.textContent = 'Capital: ';
    const capitalSpan = document.createElement('span');
    capitalSpan.textContent = projectData.capital;
    capital.appendChild(capitalSpan);
    country.appendChild(capital);
    const currency = document.createElement('p');
    currency.textContent = 'Currency: ';
    const currencySpan = document.createElement('span');
    currencySpan.textContent = projectData.currency.name + ' ' + projectData.currency.symbol;
    currency.appendChild(currencySpan);
    country.appendChild(currency);
    const region = document.createElement('p');
    region.textContent = 'Region: ';
    const regionSpan = document.createElement('span');
    regionSpan.textContent = projectData.region;
    region.appendChild(regionSpan);
    country.appendChild(region);
    const languages = document.createElement('p');
    languages.textContent = 'Languages: ';
    const languagesSpan = document.createElement('span');
    const languagesObjectKeys = Object.keys(projectData.languages);
    for(let i = 0; i < languagesObjectKeys.length; i++) {
        languagesSpan.textContent += projectData.languages[languagesObjectKeys[i]];
        if(i < languagesObjectKeys.length - 1) {
            languagesSpan.textContent += ', ';
        } else {
            languagesSpan.textContent += '.';
        }
    }
    languages.appendChild(languagesSpan);
    country.appendChild(languages);
    const flag = document.createElement('img');
    flag.src = projectData.flag;
    flag.alt = projectData.country;
    country.appendChild(flag);
    const countrySection = document.querySelector('.country-info');
    countrySection.style.display = 'block';
    setTimeout(() => {
        countrySection.scrollIntoView({
            behavior:'smooth'
        });
    }, 3000);
}




