let btnHolidays = document.getElementById("btn-holidays")
let toggleHoliday = false;

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const days = document.getElementById("days");

  for (day of dezDaysList){
      let listItem = document.createElement("li");
      listItem.classList.add("day");
      listItem.innerText = day;

      if (day == 24 || day == 25 || day == 31){
        listItem.classList.add("holiday");
      }
      else if (day == 4 || day == 11 || day == 18 || day == 25){
        listItem.classList.add("friday");
      }
      days.appendChild(listItem);
  }
}

function holidayShow() {
    let holidays = document.getElementsByClassName("holiday");
    
    for (holiday of holidays){
        if (toggleHoliday === false){
            holiday.style.backgroundColor = "#FFAEAA";
        } else{
            holiday.style.backgroundColor = "rgb(238,238,238)"
        }
    }
    toggleHoliday = !toggleHoliday;
}

createDaysOfTheWeek();
createDaysOfTheMonth();
btnHolidays.addEventListener("click", holidayShow);
// Escreva seu código abaixo.
