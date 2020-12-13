

// $(selector).html(htmlString);
var day = dayjs().format("dddd,")
var date = dayjs().format("MM-DD-YYYY,"); 
var time = dayjs().format("HH:mm");

// dayjs('')

// require('dayjs/locale')


// $("#currentDay").innerhtml("yo");

$("#currentDay").text(day + " " + date + " " +time);


var input = " ";
console.log(input)


// $(".container").append(input);



var inputTimes = [
    {time: 08, input: " "}, 
    {time: 09, input: " "},
    {time: 10, input: " "},
    {time: 11, input: " "},
    {time: 12, input: " "},
    {time: 13, input: " "},
    {time: 14, input: " "},
    {time: 15, input: " "},
    {time: 16, input: " "},
    {time: 17, input: " "},
    {time: 18, input: "test"},

]; 



// console.log (dayjs)


//create variable to create input boxes for time
//create header then append
// $(".container").html("<h4>Please select time below, fill in activity, and then save.</h4>");

//create loop for variable for input boxes buttons for savings
function createInputBoxes (){

    for (var i = 0; i < inputTimes.length; i++){
        console.log(inputTimes[i].time, inputTimes[i].input)



    }


}

createInputBoxes();

//append to header
//create local storage


