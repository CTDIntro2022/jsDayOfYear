//--------------- IMPORTANT!!! ---------------

// Use the keyboard shortcut Alt + Z (for PC) or Option + Z (for Mac) to allow word wrap on this document.  Word wrap breaks the lines so you don't have to keep scrolling left and right to read.

//READ THE INFORMATION IN THE BROWSER WINDOW PANEL ON THE RIGHT BEFORE BEGINNING YOUR ASSIGNMENT!!
const monthNameDays = [
    ["January", 31],
    ["February", 28, 29],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 30],
    ["December", 31],
  ];
  
  // Function: dayOfTheYear
  // Description: Return the day of the year for given month and day of month and year. Will check if a leap year.
  // Inputs: monthName - String - Full name of the month
  //         monthDay - Integer - Day of the month
  //         year - integer
  // Outputs: Day of the year - integer - THe day of the year or -1 if any errors encountered
  // Global References: monthNameDays - String - Two dimensional array of month names and days in that month
  // Side Effects: Console alerts if any error is enccountered
  function dayOfTheYear(monthName, monthDay, year) {
    let foundMonth = false;
    let foundDay = false;
  
    let retDOY = 0;
  
    // Let's make sure parameters are correct types
    if (typeof monthName != "string" || typeof monthDay != "number" || typeof year != "number") {
      console.error(
        `${monthName} must be string, ${monthDay} must be number and ${year} must be a number.`
      );
      return -1;
    }
  
    for (let i = 0; i < monthNameDays.length; i++) {
      // console.log("i: ", i);
      // console.log(`Compare ${monthName} to ${monthNameDays[i][0]}`);
      if (monthName == monthNameDays[i][0]) {
        // We found month in the array
        foundMonth = true;
        // Make sure day is in range of the month
        if (monthDay > 1 && monthDay <= monthNameDays[i][1]) {
          foundDay = true;
          retDOY += monthDay;
          break; // Leave for loop
        }
        // if not a valid day for the month then leave the for loop
        else {
          break;
        }
      } else {
        // Not this month, add number of days in the month
        // Special case for Feb and Leap Year
        let monthDayIndex  = 1
        if (i == 1) {
          if (isALeapYear(year)) {
            monthDayIndex = 2
          }
        }
        retDOY += monthNameDays[i][monthDayIndex];
      }
    }
  
    if (!foundMonth) {
      console.error(`${monthName} is not a valid month name`);
      return -1;
    }
  
    if (!foundDay) {
      console.error(`${monthDay} is not valid for the month of ${monthName}`);
      return -1;
    }
  
    //IF we got here then found month and day
    return retDOY;
  }
  
  // isALeapYear: Return true of the year is a leap year, false otherwise.
  // Generally, any year divisible by 4 is a leap year, except for century years (ending in "00") unless they are also divisible by 400. 
  function isALeapYear (yearIn){
    let leapYear = false
    // Is it a century year
    if (yearIn % 100 == 0) {
      console.log ("Century")
      if (yearIn % 400 == 0) {
        leapYear = true
      }
    }
    else {
      if (yearIn % 4 ==0) {
        leapYear = true
      }
    }
    return leapYear
  }
  const CHECKMONTH = "March";
  const CHECKDAY = 2;
  const CHECKYEAR = 2025
  
  console.log(
    `Day of the year of ${CHECKMONTH} ${CHECKDAY}, ${CHECKYEAR} is: ${dayOfTheYear(
      CHECKMONTH,
      CHECKDAY,
      CHECKYEAR
    )}`
  );

  // console.log (`Is ${CHECKYEAR} is a leap year ${isALeapYear(CHECKYEAR)}`)
  