

// $(selector).html(htmlString);
var day = dayjs().format("dddd,")
var date = dayjs().format("MM-DD-YYYY,"); 
var time = dayjs().format("HH:mm");

// dayjs('')

// require('dayjs/locale')


// $("#currentDay").innerhtml("yo");

$("#currentDay").text(day + " " + date + " " +time);





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
        console.log(inputTimes[i].time, inputTimes[i].input);

        var inputText = console.log(inputTimes[i].input)


        var inputGroup = $('<div class="input-group mb-3">');
        var inputGroupPrepend = $('<div class="input-group-prepend">');
        var prependSpan = $('<span class="input-group-text">' + inputTimes[i].time + ':00' + '</span>');
        inputGroupPrepend.append(prependSpan);
        
        var inputBox = $('<input type="text" id= "userInput" value = " ">')
        // var inputBox = $('<input type="text" class="form-control" value= " ">' + '</input>')

        // $(userInput).val(inputText);


        var inputGroupAppend = $('<div class="input-group-append">');
        var floppy = $('<span data-time="" class="input-group-text"><button><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> </button></span>');
        
        inputGroupAppend.append(floppy);


        inputGroup.append(inputGroupPrepend).append(inputBox).append(inputGroupAppend);
         $("#schedule").append(inputGroup,);



    }


}

createInputBoxes();


// floppy.addEventListener("click", function {
//     var savedUserData = " ";
    
//     $(savedUserData).text(inputBox.value.trim());

//     if (savedUserData === "") {
//       return;
//     }






// }    

//create local storage

//if else statement for time frames



