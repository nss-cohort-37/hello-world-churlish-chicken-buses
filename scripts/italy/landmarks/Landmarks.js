import { useLandmark } from "./LandmarkDataProvider.js"
import LandmarkComponent from "./LandmarksComponent.js"

const LandmarkListComponent = () => {

const contentElement = document.querySelector('.listies')
const landmark = useLandmark()

contentElement.innerHTML += 
`
<section class="listies--card">
<h3 class="listies--title">Italy's Top Landmarks</h3>
<ul>
       ${
            landmark.map(
                  (currentLandmark) => {
                    return LandmarkComponent(currentLandmark)
                }
        ).join("")

    }
            </ul>
    </section>
    `
}


export default LandmarkListComponent

