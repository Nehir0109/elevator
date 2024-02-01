const resultElement = document.getElementById("result");
const peopleContainer = document.getElementById("peopleContainer");
const weightIndicator = document.getElementById("symbol");
const numberScreenInside = document.getElementById("numberScreenInside");

function getRandomKg() {
  const randomKg = Math.floor(Math.random() * 51) + 50; 
  return randomKg;
}


const people = [
  '<img class="person" src="images/woman.png" />',
  ' <img class="person" src="images/man.png" />',
];

function getRandomPerson() {
  let randomPerson = Math.floor(Math.random() * 2);
  return people[randomPerson];
}

let currentPeople = 0;
let sum = 0;

function resetElevator(){
  weightIndicator.style.backgroundColor = "red";
  currentPeople = 0;
  sum = 0;
  resultElement.innerHTML = sum;
  peopleContainer.innerHTML = "";
  alert("Kg limit is max 250kg!!");
  setTimeout(() => {
    weightIndicator.style.backgroundColor = "green";
  }, 1500);
}

function addPeople(){  
  if(sum >= 250){
    resetElevator();
  } else{
    if(currentPeople < 5){
      sum += getRandomKg();
      resultElement.innerText = sum;
      currentPeople += 1;
      peopleContainer.innerHTML += getRandomPerson();
      if(sum > 250){
        resetElevator();
      }
    } else {
      alert("maximum five people can enter the elevator");
    }
  }
}


let currentFloor = 0;

function goFloor(floor) {
  function incrementFloor() {
    if (currentFloor < floor) {
      currentFloor++;
    } else if (currentFloor > floor) {
      currentFloor--;
    }

    numberScreenInside.innerText = currentFloor;

    if (currentFloor !== floor) {
      setTimeout(incrementFloor, 1500);
    }
  }

  incrementFloor();
}

elevatorKeys.forEach(function (button) {
  button.addEventListener("click", function () {
    const floorNum = button.dataset.floorNumber;
    goFloor(floorNum);
    isElevatorMoving = true;

    if (isElevatorMoving) {
      elevatorKeys.forEach(function (button) {
        button.classList.add("disabledBtn");
      });
    }
  });
});

