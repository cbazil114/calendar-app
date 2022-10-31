const container = $(".container");
const time = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"];
// Might need a label/object

// Function to display date on load of page
window.onload = function() {
  let date = new Date();
  date = moment().format("LL");
  $("#currentDay").html(date);
}

// function repeatTime () {
//     const timeblock = ` <div class="row time-block">
//     <div class="hour col-md-2">9 am</div>
//     <textarea class="col-md-8"></textarea>
//     <button class="saveBtn col-md-2"></button>
//   </div>`
// }


// Getting the current time and knowing how to log them (referenced a Stackoverlow article on the topic)
function timeValue(current) {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let amPm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12;
  minute = minute < 10 ? "0" +minute : minute;
  let strTime = hour + amPm;
  console.log(strTime);

  $.each(time, function(index, value) {
    console.log(value);
    $(".time-" + value + " .input").val(localStorage.getItem(value));
  })

  // if (strTime == current) {
  //   return $(".present")
  //  }
  //  if(hour == 12 && hour > parseInt(current) && current.includes('PM')){
  //     return $(".future")
  //  }
  //  if(current.includes('AM') && amPm == 'PM'){
  //     return $(".past")
  //  } else if(amPm == 'AM' && current.includes('PM')){
  //     return $(".future)")
  //  }
   
  //  if(current.includes(amPm)){
  //     let currentNumber = parseInt(current.replace(amPm, " "))
  //     if(currentNumber <= hour){
  //        return 'gray'
  //     } else if(currentNumber == 12){
  //        return 'gray'
  //     } else {
  //        return 'green'
  //     }
  // }
}

// Creating a function that will create the rows and elements
$.each(time, function(index, value) {
  const bgColor = timeValue(value);
  const row = $("<div>").addClass("row");
  const timeValueCol = $("<div>" + value + "</div>").addClass("hour time col-sm-1");
  const descriptionCol = $("<div></div").addClass("past description col-sm-10" + bgColor + " time-" + value);
  const saveBtnCol = $("<button></button>").addClass("saveBtn col-sm-1");
  const textarea = $("<textarea></textarea").addClass("input col-sm-12");
  const saveIcon = $('<i class="ui-icon-plus"></i>');
  
  row.append(timeValueCol);
  row.append(descriptionCol);
    descriptionCol.append(textarea);
  row.append(saveBtnCol);
    saveBtnCol.append(saveIcon);

  container.append(row);
})

// Giving the buttons functionality
$(".timeBtn").click(function() {
  const recordTime = $(this).siblings("div.time").text();
    // console.log(time);
  const input = $(this).siblings("div.description").children("textarea").val();
    // console.log(input);
  localStorage.setItem(recordTime, input);
})

// if (timeValue == current) {
//   addClass("present");
// }




// function getTime (current) {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();

//   const amPm = hours >= 12 ? "pm" : "am";
//   hours = hours % 2;
//   hours = hours ? hours : 12;
//   minutes = minutes < 10 ? "0" +minutes : minutes;
//   let strTime = hours + ":" + minutes + "" + amPm;
//   console.log(strTime);
// }


// $(document).ready(repeatTime)

// Additional resources
// https://api.jquery.com/siblings/
// https://api.jquery.com/val/
// https://api.jquery.com/each/
// https://www.w3schools.com/jsref/jsref_getminutes.asp
// https://www.w3schools.com/jsref/jsref_gettime.asp
// https://www.w3schools.com/jsref/jsref_parseint.asp
// https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
