// Schedule of events in the calendar boxes made with fx flexbox??? or just grids
// Create function to generate tr, th and td's for each resource in table
// Create resources on the left side + resource groups containing customer decided resources inside the group
// Elements need to be created using javascript with .appendChild & .createElement
var calendarHeader = document.getElementsByClassName("customCalendar")[0];

calendarHeader.innerHTML = `
  <div class="month">
      <ul>
          <li class="prev" onclick="prevWeek()">&#10094;</li>
          <li class="next" onclick="nextWeek()">&#10095;</li>
          <li>Maj<br><span style="font-size:18px">2022</span></li>
      </ul>
  </div>
  `;
var calendarTable = document.createElement("table");
calendarHeader.appendChild(calendarTable);
var calendarTableHead = document.createElement("thead");
calendarTable.appendChild(calendarTableHead);
var calendarTableBody = document.createElement("tbody");
calendarTable.appendChild(calendarTableBody);
createScheduler();

function createScheduler() {
  calendarTableHead.innerHTML = `
    <tr>
          <th class="resources">Resources</th>
          <th colspan=7>
              <ul class="weekdays" id="weekdays">
                  <li class="weekdays-grid-item1">1</li>
                  <li class="weekdays-grid-item2">2</li>
                  <li class="weekdays-grid-item3">3</li>
                  <li class="weekdays-grid-item4">4</li>
                  <li class="weekdays-grid-item5">5</li>
                  <li class="weekdays-grid-item6">6</li>
                  <li class="weekdays-grid-item7">7</li>
              </ul>
          </th>
      </tr>
      `;
  /* Table head with weekdays and resource header created */
  for (let index = 0; index < 10; index++) {
    calendarTableBody.innerHTML += `
      <tr class="resource-rows">
          <th class="resources">Francisco Chang${index}</th>
          <th>
              <ul class="scheduler-grid">
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" draggable="true">&zwj;</li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" draggable="true">&zwj;</li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" draggable="true">&zwj;</li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" draggable="true">&zwj;</li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" draggable="true">&zwj;</li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" draggable="true">&zwj;</li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" draggable="true">&zwj;</li>
              </ul>
          </th>
      </tr>
    `;
  }
  /* 10 rows inserted into tbody for testing purposes */
}
var savedRents = []
var monthNames = [];
var weekDaysArray = getWeekDays(navigator.language, Date.now());
//console.table(weekDaysArray);

var monthNamesArray = getMonthNames(navigator.language);
//console.table(monthNamesArray);

console.table(monthNames);

// Functions used to get week days names matching to the users browser language using the (locale) parameter with navigator.language
var dateOffset = 0;
var tempDate = new Date();
var beta = 1;

function addEvent(test) {
  if(beta > 7){
    beta = 1;
  }
  let companyName = prompt("Please enter company name", "Inventio.it");
  if (companyName != null) {
    test.innerHTML = companyName;
    //test.style.backgroundColor = "lightblue";
    /*while(document.getElementsByClassName(`weekdays-grid-item${beta}`) != this.id)
    {
      beta += 1;
    }*/
    var alpha = document.getElementsByClassName(`weekdays-grid-item${beta}`)[0].innerHTML;
    console.log(alpha)
    beta += 1;
  }
}

function myFunction(arg) {
  console.log(arg);
  arg.style.backgroundColor = "red";
}

function prevWeek() {
  dateOffset = -7;
  tempDate = new Date(
    tempDate.getFullYear(),
    tempDate.getMonth(),
    tempDate.getDate() + dateOffset
  );
  getWeekDays(navigator.language, tempDate);
  calendarTableBody.innerHTML = ``;
  for (let index = 0; index < 10; index++) {
    calendarTableBody.innerHTML += `
      <tr class="resource-rows">
          <th class="resources">Francisco Chang${index}</th>
          <th>
              <ul class="scheduler-grid">
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item1"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item2"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item3"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item4"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item5"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item6"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item7">&zwj;</li>
              </ul>
          </th>
      </tr>
    `;
  }
  return tempDate;
}

function nextWeek() {
  dateOffset = 7;
  tempDate = new Date(
    tempDate.getFullYear(),
    tempDate.getMonth(),
    tempDate.getDate() + dateOffset
  );
  getWeekDays(navigator.language, tempDate);
  calendarTableBody.innerHTML = ``;
  for (let index = 0; index < 10; index++) {
    calendarTableBody.innerHTML += `
      <tr class="resource-rows">
          <th class="resources">Francisco Chang${index}</th>
          <th>
              <ul class="scheduler-grid">
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item1"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item2"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item3"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item4"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item5"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item6"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this)" id="item7">&zwj;</li>
              </ul>
          </th>
      </tr>
    `;
  }
  return tempDate;
}

function getWeekDays(locale, localDate) {
  var baseDate = new Date(localDate);
  var weekDays = [];
  var logDates = [];
  var currentDate = new Date(localDate);
  var nextDate = new Date(currentDate);
  var currentMonth = baseDate.getMonth();
  currentMonth += 1;
  console.clear();
  for (i = 1; i < 8; i++) {
    weekDays.push(
      baseDate
        .toLocaleDateString(locale, {
          weekday: "long",
        })
        .charAt(0)
        .toUpperCase() +
        baseDate
          .toLocaleDateString(locale, {
            weekday: "long",
          })
          .slice(1) +
        "<br>" +
        baseDate.getDate() +
        "/" +
        currentMonth
    );

    logDates.push(baseDate.getFullYear());
    logDates.push(baseDate.getMonth());

    baseDate.setDate(baseDate.getDate() + 1);
    nextDate.setDate(currentDate.getDate() + i);
    currentMonth = baseDate.getMonth();
    currentMonth += 1;
  }
  console.table(logDates);
  console.table(weekDays);

  const listOfWeekdays = document.getElementById("weekdays").children;
  for (let i = 0; i < listOfWeekdays.length; i++) {
    listOfWeekdays[i].innerHTML = weekDays[i];
  }

  // Check for header has correct Month and Year
  var header =
    document.getElementsByClassName("month")[0].children[0].children[2];
  if (logDates[0] == logDates[12] && logDates[1] == logDates[13]) {
    header.innerHTML = `${
      monthNames[logDates[1]]
    }<br><span style="font-size:18px">${logDates[0]} </span>`;
  } else if (logDates[0] != logDates[12]) {
    header.innerHTML = `${monthNames[logDates[1]]}/${
      monthNames[logDates[13]]
    }<br><span style="font-size:18px">${logDates[0]}/${logDates[12]}</span>`;
  } else if (logDates[1] != logDates[13] && logDates[0] == logDates[12]) {
    header.innerHTML = `${monthNames[logDates[1]]}/${
      monthNames[logDates[13]]
    }<br><span style="font-size:18px">${logDates[0]}</span>`;
  }
}

// Function used to get month names matching to the users brower language using the (locale) parameter with navigator.language
function getMonthNames(locale) {
  var baseDate = new Date(Date.UTC(2022, 0, 1));
  for (let i = 0; i < 12; i++) {
    monthNames.push(
      baseDate.toLocaleDateString(locale, {
        month: "long",
      })
    );
    baseDate.setMonth(baseDate.getMonth() + 1);
  }
  for (let monthIndex = 0; monthIndex < monthNames.length; monthIndex++) {
    if (
      monthNames[new Date().getMonth()] == monthNames[monthIndex] &&
      new Date().getFullYear() == 2022
    ) {
      document.getElementsByClassName(
        "month"
      )[0].children[0].children[2].innerHTML = `${
        monthNames[monthIndex]
      }<br><span style="font-size:18px">${new Date(
        Date.now()
      ).getFullYear()}</span>`;
    }
  }
}
// Slab City //

// https://webdevtrick.com/html-drag-and-drop-list/

var remove = document.querySelector('.scheduler-grid-item');
 
function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};
 
function dragEnter(e) {
  this.classList.add('over');
}
 
function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}
 
function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}
 
function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}
 
function dragEnd(e) {
var listItens = document.querySelectorAll('.scheduler-grid-item');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}
 
function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}
 
var listItens = document.querySelectorAll('.scheduler-grid-item');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});