// const container = $(".container");
// const time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
// Might need a label/object

// Function to display date on load of page
window.onload = function() {
  let date = new Date();
  date = moment().format("LL");
  $("#currentDay").html(date);
}

// Function calls localstorage saved information when readying the page
$(document).ready(function() {
  const keyStrings = Object.keys(localStorage);
  for (let i = 0; i < keyStrings.length; i++) {
    let description = localStorage.getItem(keyStrings[i]);
    let userInput = $("#" + keyStrings[i]).find("textarea");
    userInput.val(description);
  }

  // The .on event will log the information into the localStorage
  $(".saveBtn").on("click", function(e) {
    e.preventDefault();
    let description = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, description);
  });

  // The following function will organize the different hours into past, present, and future
  function relativeTime() {
    let currentTime = moment().hours();
    $(".time-block").each(function () {
      let hourAttr = $(this).attr("id");
      console.log(hourAttr);
      let hourRelative = function() {
      for (let i = 9; i < 17; i++) {
        let blockTime = `$(#${i})`;
        console.log(`$(#${i})`);
        
        let hourRelativeParse = parseInt(blockTime);
        let currentTimeParse = parseInt(currentTime);
        
  
        // if (parseInt(hourRelativeParse) < parseInt(currentTimeParse)) {
        if (currentTimeParse < hourRelativeParse) {
          `$(#${i})`.addClass("past");
          `$(#${i})`.removeClass("present");
          `$(#${i})`.removeClass("future");
        // } else if (parseInt(hourRelativeParse) > parseInt(currentTimeParse)) {
        } else if (currentTimeParse > hourRelativeParse) {
          `$(#${i})`.removeClass("past");
          `$(#${i})`.removeClass("present");
          `$(#${i})`.addClass("future");
        // } else if (parseInt(hourRelativeParse)=== parseInt(currentTimeParse)){
        } else if (currentTimeParse === hourRelativeParse) {  
          `$(#${i})`.removeClass("past");
          `$(#${i})`.addClass("present");
          `$(#${i})`.removeClass("future");
        }
      }
    }
    })
  }
  relativeTime();
});




// Additional resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://api.jquery.com/siblings/
// https://api.jquery.com/val/
// https://api.jquery.com/each/
// https://www.w3schools.com/jsref/jsref_getminutes.asp
// https://www.w3schools.com/jsref/jsref_gettime.asp
// https://www.w3schools.com/js/js_this.asp
// https://www.w3schools.com/jsref/jsref_parseint.asp
// https://learn.jquery.com/using-jquery-core/document-ready/
// https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
