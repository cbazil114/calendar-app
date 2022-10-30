const containerOne = $("#containerOne");
const time = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
// Might need a label/object

// Function to display date on load of page
window.onload = function() {
  let date = new Date();
  date = moment().format("LL");
  $("#currentDay").html(date);
}

function repeatTime () {
    const timeblock = ` <div class="row time-block">
    <div class="hour col-md-2">9 am</div>
    <textarea class="col-md-8"></textarea>
    <button class="saveBtn col-md-2"></button>
  </div>`
}

$(document).ready(repeatTime)

