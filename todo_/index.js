let modelField = document.getElementById("model")
let transmissionField = document.getElementById("transmission")
let fuelField = document.getElementById("fuel")
let submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let modelValue = modelField.value;
    let transmissionValue = transmissionField.value;
    let fuelValue = fuelField.value;
    
    let modelsData = document.querySelector(".model_data");
    
    let newDiv = document.createElement("div");
    let listModel = document.createElement("h3");
    let listtransmission = document.createElement("h3");
    let listfuel = document.createElement("h3");

    listModel.innerText = modelValue;
    listtransmission.innerText = transmissionValue;
    listfuel.innerText = fuelValue;

    newDiv.appendChild(listModel);
    newDiv.appendChild(listtransmission);
    newDiv.appendChild(listfuel);
    modelsData.appendChild(newDiv);

    newDiv.classList.add("list-model-data");
})