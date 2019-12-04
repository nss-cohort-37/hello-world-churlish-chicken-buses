const LandMarksComponent = (landmark) => {
    let LandmarkSpacelessName = landmark.landmarkName.split(" ").join("-")
    return `
    <li class="listies--landmarks">${landmark.landmarkName}</li>
    <button id="city--${LandmarkSpacelessName}">Details</button>
    <dialog class="dialog--landmark" id="details--${LandmarkSpacelessName}">
        <img src="${landmark.landmarkImage}" alt="image of ${landmark.landmarkName}">

    <button class="button--close">Close Dialog</button>
    </dialog>
    `
}
export default LandMarksComponent
