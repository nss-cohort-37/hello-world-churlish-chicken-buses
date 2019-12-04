import { useCity }  from "./CityDataProvider.js"
import CityComponent from "./CitiesComponent.js"


const CityListComponent = () => {
    const contentElement = document.querySelector(".listies")
    const city = useCity()

contentElement.innerHTML += `
    <section class="listies--card">
    <h3 class="listies--title">Vietnam's Top Cities</h3>
    <ul>
    ${
        city.map(
            (currentCity) => {
               return CityComponent(currentCity)
            }
        ).join("")
        // could also be short handed as
        // fishes.map(fish => FishComponent(fish)).join("")
    }
    </ul>
    </section>
`
}

export default CityListComponent