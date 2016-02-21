// 1
var myJSONProfile = {
    "first_name": "Aliaksei",
    "last_name": "Alioshka",
    "current_age": 31,
    "married": false,
    "phone_numbers": {
        "home_phone": "294-xx-xx",
        "cell_phone": "501-xx-xx"
    }
}
//And you can interact with that JSON without having to parse it or anything
console.log("1:");
console.log(myJSONProfile.first_name + " " + myJSONProfile.last_name);
console.log("Cell phone: " + myJSONProfile.phone_numbers.cell_phone);

// 2
var fs = require('fs');
var myJSONProfile2 = JSON.parse(fs.readFileSync("profile.json"));
console.log("2:");
console.log(myJSONProfile2.first_name + " " + myJSONProfile2.last_name);
console.log("Cell phone: " + myJSONProfile2.phone_numbers.cell_phone);

// 3
var myJSONProfile3 = require('./profile.js')
console.log("3:");
console.log(myJSONProfile3.first_name + " " + myJSONProfile3.last_name);
console.log("Cell phone: " + myJSONProfile3.phone_numbers.cell_phone);