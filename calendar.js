// Schedule of events in the calendar boxes made with fx flexbox??? or just grids
// Create function to generate tr, th and td's for each resource in table
// Create resources on the left side + resource groups containing customer decided resources inside the group
var calendarDiv = document.getElementsByClassName("customCalendar")[0];

calendarDiv.innerHTML = `
  <div class="month">
      <ul>
          <li class="prev" onclick="prevWeek()">&#10094;</li>
          <li class="next" onclick="nextWeek()">&#10095;</li>
          <li>Maj<br><span style="font-size:18px">2022</span></li>
      </ul>
  </div>
  <table>
    <thead>
      <tr>
          <th class="resources">Resources</th>
          <th colspan=7>
              <ul class="weekdays" id="weekdays">
                  <li class="weekdays-grid-item">1</li>
                  <li class="weekdays-grid-item">2</li>
                  <li class="weekdays-grid-item">3</li>
                  <li class="weekdays-grid-item">4</li>
                  <li class="weekdays-grid-item">5</li>
                  <li class="weekdays-grid-item">6</li>
                  <li class="weekdays-grid-item">7</li>
              </ul>
          </th>
      </tr>
    </thead>
    <tbody>
      <tr class="resource-rows">
          <th class="resources">Maria Anders</th>
          <th class="resources" ondblclick="myFunction(this)">test1</th>
          <th class="resources" ondblclick="myFunction(this)">test2</th>
          <th class="resources" ondblclick="myFunction(this)">test3</th>
          <th class="resources" ondblclick="myFunction(this)">test4</th>
          <th class="resources" ondblclick="myFunction(this)">test5</th>
          <th class="resources" ondblclick="myFunction(this)">test6</th>
          <th class="resources" ondblclick="myFunction(this)">test7</th>
      </tr>
      <tr class="resource-rows">
          <th class="resources">Francisco Chang</th>
          <th colspan=7>
              <ul class="scheduler-grid">
                  <li class="scheduler-grid-item" ondblclick="addEvent(this.id)" id="item1"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this.id)" id="item2"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this.id)" id="item3"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this.id)" id="item4"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this.id)" id="item5"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this.id)" id="item6"></li>
                  <li class="scheduler-grid-item" ondblclick="addEvent(this.id)" id="item7"></li>
              </ul>
          </th>
      </tr>
      <tr class="resource-rows">
          <th class="resources">Roland Mendel</th>
          <td onclick="console.log('test')"></td>
      </tr>
    </tbody>
  </table>
`;

var monthNames = [];
var weekDaysArray = getWeekDays(navigator.language, Date.now());
//console.table(weekDaysArray);

var monthNamesArray = getMonthNames(navigator.language);
//console.table(monthNamesArray);

console.table(monthNames);


// Functions used to get week days names matching to the users browser language using the (locale) parameter with navigator.language
var dateOffset = 0;
var tempDate = new Date();

function addEvent(test) {
  alert("Event added on " + test);
}

function myFunction(arg) {
  console.log(arg);
  arg.style.color = "red";
  arg.innerHTML = "Inventio.it";
}

function prevWeek() {
  dateOffset = -7;
  tempDate = new Date(
    tempDate.getFullYear(),
    tempDate.getMonth(),
    tempDate.getDate() + dateOffset
  );
  getWeekDays(navigator.language, tempDate);
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
