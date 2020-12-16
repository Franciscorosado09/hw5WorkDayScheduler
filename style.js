

// variables 
var day = dayjs().format("dddd,")
var date = dayjs().format("MM-DD-YYYY,"); 

var time = dayjs().format("HH:mm");
var compareHour= dayjs().format("HH")


// Setting Day, Date, Time
$("#currentDay").text(day + " " + date + " " +time);



//Live Time

setInterval(function (){
    var time = dayjs().format("HH:mm");
    $("#currentDay").text(day + " " + date + " " +time);



}, 1000);





// objects of time and input boxes



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









//create loop for variable for input boxes buttons for savings
for (var i = 0; i < inputTimes.length; i++){
    console.log(inputTimes[i].time, inputTimes[i].input);

     var inputText = console.log(inputTimes[i].input)
     var inputGroup = $('<div>');
        var inputGroupPrepend = $('<div>');
        var prependSpan = $('<span class="timeblock">' + inputTimes[i].time + ':00' + '</span>');
        inputGroupPrepend.append(prependSpan);
        
        var inputBox = $('<input type="text" class="textarea" id= "userInput" value = "' + inputTimes[i].input + '">')
        

        var inputGroupAppend = $('<div>');
        var floppy = $('<span data-time="" class=""><button><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> </button></span>');
        
        inputGroupAppend.append(floppy);


        inputGroup.append(inputGroupPrepend).append(inputBox).append(inputGroupAppend);
         $("#schedule").append(inputGroup,);


//if else statments to color code classes
        
    if ( compareHour === inputTimes[i].time) {
    $(inputBox).addClass("present");
    } else if (compareHour < inputTimes[i].time) {
    $(inputBox).addClass("future");
    } else {
    $(inputBox).addClass("past");
    }




    }


     
//Click event for local storage

$("button").click(function (e) { 
    e.preventDefault();
    
    // var inputText = JSON.parse(localStorage.getItem(inputTimes[i].input));
    
    
    // var inputText = $(savedUserData).text(inputTimes[i].input);

    var savedUserData = $(e.target).prev(inputBox).val()
    console.log (savedUserData)

    var eventSave= $(e.target).prev().prev().text()
    console.log (eventSave)



    localStorage.setItem(savedUserData, eventSave)
    console.log (localStorage)

//  savedInputInfo();

    
});















