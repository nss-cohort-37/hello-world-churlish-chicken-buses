import { useCity } from "./CityDataProvider.js";
import CityComponent from "./CitiesComponent.js";

const CityListComponent = () => {

    const contentElement = document.querySelector(".listies")
    const city = useCity()




    contentElement.innerHTML += `
        <section class="listies--card">
        <h3 class="listies--title">Switzerland's Top Cities</h3>
        <ul>
        ${
            city.map(
                (currentCity) => {
                    return CityComponent(currentCity)
                }
            ).join("")
        }
        </ul>
        </section>
    `
    
}

export default CityListComponent