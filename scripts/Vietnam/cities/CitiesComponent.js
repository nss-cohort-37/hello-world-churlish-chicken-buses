

const CityComponent = (city) => {
    let citySpacelessName = city.cityName.split(" ").join("-")
    return `
    <li class="listies--cities">${city.cityName}</li>
    <button id="city--${citySpacelessName}">Details</button>
    <dialog class="dialog--city" id="details--${citySpacelessName}">
         <div>Population: ${city.cityPopulation}</div>
          <button class="button--close">Close Dialog</button>
    </dialog>
    `
}

export default CityComponent