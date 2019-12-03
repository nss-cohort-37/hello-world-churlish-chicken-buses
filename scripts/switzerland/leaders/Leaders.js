import { useLeader } from "./LeaderDataProvider.js";
import LeaderComponent from "./LeadersComponent.js";


const LeaderListComponent = () => {

    const contentElement = document.querySelector(".listies")
    const leader = useLeader()

    contentElement.innerHTML += `
        <section class="listies--card">
        <h3 class="listies--title">Switzerland's Leaders</h3>
        <ul>
        ${
            leader.map(
                (currentLeader) => {
                    return LeaderComponent(currentLeader)
                }
            ).join("")
        }
        </ul>
        </section>
    `
    
}

export default LeaderListComponent