const LandmarkComponent = (landmark) => {
    let newLandmarkName = landmark.landmarkName.split(" ").join("-")


    return `
        <li class="listies--cities">${landmark.landmarkName}</li>
        <button id="city--${newLandmarkName}">Details</button>
        <dialog class="dialog--city" id="details--${newLandmarkName}">
        <img src="${landmark.landmarkImage}" alt="${landmark.landmarkName}">
            <br>
            <button class="button--close">Close Dialog</button>
        </dialog>
    `
}

export default LandmarkComponent