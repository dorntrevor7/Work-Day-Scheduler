
// Displays the current day in the class jumbrotron
var currentDay = $("<p>").text(moment().format("MMMM Do YYYY"));
currentDay.addClass("lead");
$(".jumbotron").append(currentDay);

// creating getting the attribute of the data number and 
// displaying the color in the right time slot/box
$(".hour").each(function () {
    $(this)
        .removeClass("present")
        .removeClass("future")
        .removeClass("past");

    // creating variables for the moment methods 
    // of getting the hour that your computer is currently in and 
    // checking to see if the hour is past, present, or future
    var currentHour = moment().format("h");
    var dataNum = $(this).attr("data-num");

    if (dataNum < currentHour) {
        $(this).addClass("past");
    };
    if (dataNum === currentHour) {
        $(this).addClass("present");
    };
    if (dataNum > currentHour) {
        $(this).addClass("future");
    };
});

// When the save button gets clicked
$(".saveBtn").on("click", function () {

    // The saveBtn gets the value of text from the from its sibling 
    // in the textarea and pairs it with the hour that is displayed
    var text = $(this).siblings("textarea").val().trim();
    var hour = $(this).siblings("textarea").attr("data-num");
    console.log("text: ", text);
    console.log("hour: ", hour);

    // Store in local storage
    localStorage.setItem(hour, text);
})

//getting the texts that are stored in the keys
// from local stroage and 
// tracing it back to the certain Id
$("#9").text(localStorage.getItem("09"));
$("#10").text(localStorage.getItem("10"));
$("#11").text(localStorage.getItem("11"));
$("#12").text(localStorage.getItem("12"));
$("#1").text(localStorage.getItem("1"));
$("#2").text(localStorage.getItem("2"));
$("#3").text(localStorage.getItem("3"));
$("#4").text(localStorage.getItem("4"));
$("#5").text(localStorage.getItem("5"));