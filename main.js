const date_sort_desc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // DESCENDING order.
  if (date1.date > date2.date) return -1;
  if (date1.date < date2.date) return 1;
  return 0;
};

//convert single digit integer to two digits
function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

const findMostRecentLogin = function(arrayToSearch) {
  const dates = accounts.map(account => account.last_login.date_time)
  const dateArray = []
  const dateArrayFormatted = []
  let counter = 0
  dates.forEach(function(obj){
    const login = {}
    let month = obj.split(" ")[1]
    if (month === "Jan") {
      month = "00"
    }
    if (month === "Feb") {
      month = "01"
    }
    if (month === "Mar") {
      month = "02"
    }
    if (month === "Apr") {
      month = "03"
    }
    if (month === "May") {
      month = "04"
    }
    if (month === "Jun") {
      month = "05"
    }
    if (month === "Jul") {
      month = "06"
    }
    if (month === "Aug") {
      month = "07"
    }
    if (month === "Sep") {
      month = "08"
    }
    if (month === "Oct") {
      month = "09"
    }
    if (month === "Nov") {
      month = "10"
    }
    if (month === "Dec") {
      month = "11"
    }
    login.idNumber = counter
    login.month = month
    login.day = pad(parseInt(obj.replace("  ", " ").split(" ")[2]))
    login.hour = pad(parseInt(obj.replace("  ", " ").split(" ")[3].split(":")[0]))
    login.minute = pad(parseInt(obj.replace("  ", " ").split(" ")[3].split(":")[1]))
    login.second = pad(parseInt(obj.replace("  ", " ").split(" ")[3].split(":")[2]))
    dateArray.push(login)
    counter++
  })
  dateArray.forEach(function(obj) {
    let formattedDateObject = {}
    let formattedDate = new Date(2018, obj.month, obj.day, obj.hour, obj.minute, obj.second, 0)
    formattedDateObject.idNumber = obj.idNumber
    formattedDateObject.date = formattedDate
    dateArrayFormatted.push(formattedDateObject)
  })
  const sortedArray = dateArrayFormatted.sort(date_sort_desc)
  return accounts[sortedArray[0].idNumber]
}

console.log(findMostRecentLogin(accounts))