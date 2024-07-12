import { countryInfo, updateUI } from "./updateUI.js";

// Declaration and initialization of required variables
export const startDate = document.getElementById('start-date');

export const endDate = document.getElementById('end-date');

let projectData = {};

const weatherBitAPIKey = 'a095df9fd6104ae9b9c376e19912db51';

const pixabayAPIKey = '44772974-ddebf938b91f8c7c4cdd373f7';

const weatherBitUrl = `https://api.weatherbit.io/v2.0/history/hourly`;

const pixabayUrl = `https://pixabay.com/api/`;

const countryUrl = 'https://countryapi.io/api/name/';

const countryAPIKey = 'osFNzahHd7MAMx88OWrAamb3WMbU0CrFOJ5DwYBF';


// Function that will call all the required APIs and configure response 
export async function handleSubmit(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const geoNamesUrl = `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=jamila20`;
    try {
        const geoNamesResponse = await fetchGeoNamesData(geoNamesUrl);
        projectData.country = geoNamesResponse.geonames[0].countryName;
        projectData.latitude = geoNamesResponse.geonames[0].lat;
        projectData.longitude = geoNamesResponse.geonames[0].lng;
        projectData.countryCode = geoNamesResponse.geonames[0].countryCode;

        const weatherBitResponse = await fetchWeatherBitData(weatherBitUrl, projectData, startDate.value, endDate.value, weatherBitAPIKey);
        projectData.temperature = weatherBitResponse.data[0].temp;
        projectData.weatherIcon = weatherBitResponse.data[0].weather.icon;
        projectData.description = weatherBitResponse.data[0].weather.description;

        const pixabayResponse = await fetchPixabayData(pixabayUrl, location, pixabayAPIKey);
        projectData.image = pixabayResponse.hits[0]?.webformatURL;

        if (!projectData.image) {
            pixabayResponse = await fetchPixabayData(pixabayUrl, projectData.country, pixabayAPIKey);
            projectData.image = pixabayResponse.hits[0].webformatURL;
        }

        const countryResponse = await fetchCountryData(countryUrl, projectData.country, countryAPIKey);
        const countryCode = Object.keys(countryResponse)[0];
        projectData.officialName = countryResponse[countryCode].official_name;
        projectData.cioc = countryResponse[countryCode].cioc;
        projectData.callingCode = countryResponse[countryCode].callingCode;
        projectData.capital = countryResponse[countryCode].capital;
        projectData.region = countryResponse[countryCode].region;
        projectData.languages = countryResponse[countryCode].languages;
        projectData.flag = countryResponse[countryCode].flag.medium;
        const currencyObject = countryResponse[countryCode].currencies;
        const currencyObjectKey = Object.keys(currencyObject)[0];
        projectData.currency = currencyObject[currencyObjectKey];

        updateUI(projectData);
        localStorageHandler();
        countryInfo(projectData);
    }
    catch (error) {
        console.error('Error during fetch operations:', error);
    }
}

// Function to get geonames API data
async function fetchGeoNamesData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// Function to get weatherBit API data
async function fetchWeatherBitData(baseUrl, projectData, startDate,endDate, apiKey) {
    try {
        const response = await
        fetch(`${baseUrl}?lat=${projectData.latitude}&lon=${projectData.longitude}&start_date=${startDate}&end_date=${endDate}&key=${apiKey}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// Function to get pixabay API data
async function fetchPixabayData(baseUrl, location, apiKey) {
    try {
        const response = await
        fetch(`${baseUrl}?key=${apiKey}&q=${location}&image_type=photo`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// Function to get country API data
async function fetchCountryData(baseUrl, country, apiKey) {
    try {
        const response = await fetch(`${baseUrl}${country}?apikey=${apiKey}`);
        const data = response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

// Function that configure localStorage property of the window 
function localStorageHandler() {
    const localStorage = window.localStorage;
    const formElements = document.querySelector('.get-started-form').children;
    for (let i = 0; i < formElements.length; i++) {
            if(formElements[i].tagName === 'INPUT' || formElements[i].tagName === 'SELECT' ||
            formElements[i].tagName === 'TEXTAREA') {
            localStorage.setItem(formElements[i].id, formElements[i].value);
        }
    }
}

// Function that will keep user's data available in the form fields
export function doNotLoseData() {
    const formElements = document.querySelector('.get-started-form').children;
    for (let i = 0; i < formElements.length; i++) {
        if(formElements[i].tagName === 'INPUT' || formElements[i].tagName === 'SELECT' ||
            formElements[i].tagName === 'TEXTAREA') {
            formElements[i].value = window.localStorage.getItem(formElements[i].id);
        }
    }
}

// Code for handling toggle-menu and close icons of navbar for small screens
export function toggleMenu() {
    const desiredMedia = window.matchMedia("(max-width: 768px)");
    if(desiredMedia.matches) {
        const bar = document.querySelector('.toggle-menu');
        const nav = document.querySelector('.links');
        const xMark = document.querySelector('.close');
        if(bar) {
            bar.addEventListener('click', () => {
                nav.classList.add('active');
            });
        }
        if(xMark) {
            xMark.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        }
    }
}



