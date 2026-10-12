/*
══════════════════════════════════════════════
📅 DATE AND TIME IN JAVASCRIPT (DETAILED NOTES)
══════════════════════════════════════════════

JavaScript provides the `Date` object to work with:
✔ Current Date
✔ Current Time
✔ Custom Dates
✔ Timestamps
✔ Formatting Dates
✔ Extracting Month, Day, Year, etc.

------------------------------------------------
1️⃣ CREATING A DATE OBJECT
------------------------------------------------
*/

// Creates current date and time
let mydate = new Date();

console.log(mydate);

/*
Output Example:
2026-06-06T05:30:12.123Z

This is the raw ISO format.
Contains:
Year-Month-Day Time
*/


/*
------------------------------------------------
2️⃣ DIFFERENT WAYS TO DISPLAY DATE
------------------------------------------------
*/

console.log(mydate.toString());

/*
Converts full date into readable string.

Example:
"Sat Jun 06 2026 11:00:00 GMT+0530"

Includes:
✔ Day
✔ Month
✔ Date
✔ Year
✔ Time
✔ Timezone
*/


console.log(mydate.toDateString());

/*
Shows only the date part.

Example:
"Sat Jun 06 2026"

No time is shown.
*/


console.log(mydate.toLocaleString());

/*
Shows date + time according to
your system/region format.

Example in India:
"6/6/2026, 11:00:00 am"
*/


console.log(mydate.toLocaleDateString());

/*
Shows only date in local format.

Example:
"6/6/2026"
*/


/*
------------------------------------------------
3️⃣ CREATING CUSTOM DATES
------------------------------------------------
*/

// Format: new Date(year, monthIndex, day)

let mycreateddate = new Date(2026, 6, 5);

console.log(mycreateddate.toDateString());

/*
IMPORTANT:

Months in JavaScript are 0-indexed.

0 → January
1 → February
2 → March
3 → April
4 → May
5 → June
6 → July
7 → August
8 → September
9 → October
10 → November
11 → December

So:
new Date(2026, 6, 5)

Means:
Year = 2026
Month = July (NOT June)
Day = 5

Output:
"Sun Jul 05 2026"
*/


/*
------------------------------------------------
4️⃣ CREATING DATE USING STRING FORMAT
------------------------------------------------
*/

// YYYY-MM-DD format
let mycreateddate2 = new Date("2026-05-06");

console.log(mycreateddate2);

/*
This format directly parses the date.

Output:
2026-05-06T00:00:00.000Z

Here:
Year = 2026
Month = May
Date = 6

Unlike numeric constructor,
month is NOT zero-indexed here.
*/


/*
------------------------------------------------
5️⃣ TIMESTAMPS IN JAVASCRIPT
------------------------------------------------
*/

/*
Timestamp = milliseconds passed
since January 1, 1970
(Unix Epoch)
*/

let mytimestamp = Date.now();

console.log(mytimestamp);

/*
Example Output:
1780723456789

Very useful for:
✔ Comparing dates
✔ Sorting
✔ Calculating time difference
*/


/*
Get timestamp of custom date
*/

console.log(mycreateddate.getTime());

/*
Returns timestamp in milliseconds
for that specific date.
*/


/*
Convert milliseconds to seconds
*/

console.log(Math.floor(Date.now() / 1000));

/*
Date.now() gives milliseconds.

Divide by 1000 → seconds

Math.floor() removes decimal values.
*/


/*
------------------------------------------------
6️⃣ GETTING SPECIFIC PARTS OF DATE
------------------------------------------------
*/

let newdate = new Date();


/*
Get Month
*/

console.log(newdate.getMonth() + 1);

/*
Months are 0-indexed.

0 → January
11 → December

So we add +1
to get actual month number.
*/


/*
Get Day of Week
*/

console.log(newdate.getDay());

/*
Returns weekday number:

0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
*/


/*
------------------------------------------------
7️⃣ OTHER USEFUL DATE METHODS
------------------------------------------------
*/

console.log(newdate.getDate());

/*
Returns current date of month.

Example:
6
*/


console.log(newdate.getFullYear());

/*
Returns year.

Example:
2026
*/


console.log(newdate.getHours());

/*
Returns current hour.
Range: 0 to 23
*/


console.log(newdate.getMinutes());

/*
Returns minutes.
Range: 0 to 59
*/


console.log(newdate.getSeconds());

/*
Returns seconds.
Range: 0 to 59
*/


console.log(newdate.getMilliseconds());

/*
Returns milliseconds.
*/


/*
------------------------------------------------
8️⃣ CUSTOM FORMAT USING toLocaleString()
------------------------------------------------
*/

console.log(
  newdate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
);

/*
Example Output:
"Saturday, June 6, 2026"

Useful for making
beautiful date formats.
*/


/*
══════════════════════════════════════════════
📝 QUICK REVISION
══════════════════════════════════════════════

new Date()
→ Current date & time

toString()
→ Full date + time

toDateString()
→ Only date

toLocaleString()
→ Local date + time

Date.now()
→ Current timestamp

getTime()
→ Timestamp of custom date

getMonth()
→ Month (0-indexed)

getDay()
→ Weekday (0–6)

getDate()
→ Date of month

getFullYear()
→ Current year

getHours()
→ Hour

getMinutes()
→ Minutes

getSeconds()
→ Seconds

getMilliseconds()
→ Milliseconds
*/