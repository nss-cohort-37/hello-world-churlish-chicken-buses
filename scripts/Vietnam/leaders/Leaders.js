import { useLeader }  from "./LeadersDataProvider.js"
import LeadersComponent from "./LeadersComponent.js"


const LeaderListComponent = () => {
    const contentElement = document.querySelector(".listies")
    const leader = useLeader()

contentElement.innerHTML += `
    <section class="listies--card">
    <h3 class="listies--title">Vietnam's Leaders</h3>
    <ul>
    ${
        leader.map(
            (currentLeader) => {
               return LeadersComponent(currentLeader)
            }
        ).join("")
        // could also be short handed as
        // fishes.map(fish => FishComponent(fish)).join("")
    }
    </ul>
</section>
`
}
export default LeaderListComponent
