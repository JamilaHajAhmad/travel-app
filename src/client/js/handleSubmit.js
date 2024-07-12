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