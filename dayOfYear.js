//--------------- IMPORTANT!!! ---------------

// This will be in Version 1.1
const monthNameDays = [
    ["January", 31],
    ["February", 28],
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
  // Description: Return the day of the year for given month and day of month
  // Inputs: monthName - String - Full name of the month
  //         monthDay - Integer - Day of the month
  // Outputs: Day of the year - integer - THe day of the year or -1 if any errors encountered
  // Global References: monthNameDays - String - Two dimensional array of month names and days in that month
  // Side Effects: Console alerts if any error is enccountered
  export function dayOfTheYear(monthName, monthDay) {
    let foundMonth = false;
    let foundDay = false;
  
    let retDOY = 0;
  
    // Let's make sure parameters are correct types
    if (typeof monthName != "string" || typeof monthDay != "number") {
      console.error(
        `${monthName} must be string and ${monthDay} must be number.`
      );
      return -1;
    }
  
    for (let i = 0; i < monthNameDays.length; i++) {
      // console.log("i: ", i);
      // console.log(`Compare ${monthName} to ${monthNameDays[i][0]}`);
      if (monthName == monthNameDays[i][0]) {
        // We found month in the array
        // console.log("Found the month");
        foundMonth = true;
        // Make sure day is in range of the month
        // Version 1.1 changed monthday > 1 to monthday >= 1 to address defect #1234
        if (monthDay => 1 && monthDay <= monthNameDays[i][1]) {
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
        retDOY += monthNameDays[i][1];
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
  
  const CHECKMONTH = "January";
  const CHECKDAY = 31;
  
  console.log(
    `Day of the year of ${CHECKMONTH}, ${CHECKDAY} is: ${dayOfTheYear(
      CHECKMONTH,
      CHECKDAY
    )}`
  );
  