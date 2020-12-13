// Day.js
// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {
        
//     }
// });


var dayjs = require('dayjs')
import dayjs from 'dayjs' // ES 2015
require('dayjs/locale')
dayjs(("12-25-2001", ["YYYY", "YYYY-MM-DD", "hh-mm"], true)).format()

// dayjs('')

// require('dayjs/locale')


$(dayjs).append("#currentDay");

console.log (dayjs)
