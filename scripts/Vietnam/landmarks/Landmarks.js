import { useLandmark }  from "./LandMarksDataProvider.js"
import LandMarkComponent from "./LandmarksComponent.js"


const LandmarkListComponent = () => {
    const contentElement = document.querySelector(".listies")
    const landmark = useLandmark()

contentElement.innerHTML += `
    <section class="listies--card">
    <h3 class="listies--title">Vietnam's Top Landmarks</h3>
    <ul>
    ${
        landmark.map(
            (currentLandmark) => {
               return LandMarkComponent(currentLandmark)
            }
        ).join("")
        // could also be short handed as
        // fishes.map(fish => FishComponent(fish)).join("")
    }
    </ul>
</section>
`
}

export default LandmarkListComponent