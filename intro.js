alert("my name is Subiri Woyengikuro, I am 6 foot tall and I am from Nigeria.")

var year_born = prompt("Please enter your date of birth:", "Type here");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
alert("Hello, " + "you are " + calculatedAge + " years old!");
