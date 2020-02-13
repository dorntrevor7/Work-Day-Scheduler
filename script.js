var otherHour = moment().hours();
console.log(otherHour);
// creating getting the attribute of the data number and 
// displaying the color in the right time slot/box
$(".hour").each(function () {
    $(this)
        .removeClass("present")
        .removeClass("future")
        .removeClass("past");

    var currentHour = moment().format("h");
    var dataNum = $(this).attr("data-num");
    // console.log(dataNum);
    // console.log(currentHour);

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

$(".saveBtn").on("click", function () {
    //console.log($(this));
    var text = $(this).siblings("textarea").val().trim();
    var hour = $(this).siblings("textarea").attr("data-num");
    console.log("text: ", text);
    console.log("hour: ", hour);

    //store in local storage
    localStorage.setItem(hour, text);

})

//getting texts from local stroage
$("#9").text(localStorage.getItem("09"));