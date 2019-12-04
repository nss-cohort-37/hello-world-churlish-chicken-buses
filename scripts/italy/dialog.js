const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line
    // Get a reference to all buttons that start with "button with an id of city--"
    const allCityButtons = document.querySelectorAll("button[id^='city--']")

    // Add an event listener to each one
    for (const btn of allCityButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                const theDialog = document.querySelector(dialogSiblingSelector)
                theDialog.showModal()
            }
        )
    }


    // You will be writing code below this line
    // Get a reference to all buttons that start with "button with an id of landmark--"
    const allLandmarkButtons = document.querySelectorAll("button[id^='landmark--']")

    // Add an event listener to each one
    for (const btn of allLandmarkButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                const theDialog = document.querySelector(dialogSiblingSelector)
                theDialog.showModal()
            }
        )
    }
}

export default initializeDetailButtonEvents