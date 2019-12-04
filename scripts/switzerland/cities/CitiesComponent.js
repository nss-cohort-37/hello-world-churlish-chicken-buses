const CityComponent = (city) => {

    return `
        <li class="listies--cities">${city.cityName}</li>
        <button id="city--${city.cityName}">Details</button>
        <dialog class="dialog--city" id="details--${city.cityName}">
            <div>Population: ${city.cityPopulation}</div>
            <button class="button--close">Close Dialog</button>
        </dialog>
    `
}

export default CityComponent