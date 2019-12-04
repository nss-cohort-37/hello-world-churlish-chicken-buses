//LandmarkComponent renders indivudual landmark objects as HTML in a string template
const LandmarkComponent = (landmark) => {
    let newLandmarkName = landmark.landmarkName.split(" ").join("-")
    
    return `
<li class="listies--landmarks">${landmark.landmarkName}</li>
<button id="landmark--${newLandmarkName}">Details</button>
<dialog class="dialog--landmark" id="details--${newLandmarkName}">
    <img src="${landmark.image}">
    <button class="button--close">Close Dialog</button>
</dialog>
    `
}

export default LandmarkComponent
