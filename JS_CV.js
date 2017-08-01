//This CV is inverted for your reading

console.log(person)

var Person = function(firstName, lastName, age, sex, nationality) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.sex = sex
  this.nationality = nationality

  this.skills = []
  this.education = []
  this.jobExperience = []
}//might take age out and turn it into a age maker function?

var Reece = new Person("Reece", "Jones", countAge(1986), "Male", "Australian/Brit")

var countAge = function(yearBorn) {
  var d = new Date();
  // var n = d.getFullYear();

  var dateDiff = Math.abs(d.getFullYear() - yearBorn)
  var age = Math.ceil(dateDiff / (10 * 36 * 24))


  return age
}//close but need to keep at it

d.getFullYear();var dateDiff = Math.abs(d.getFullYear() - yearBorn);var age = Math.ceil(dateDiff / (10 * 36 * 24))

var date1 = new Date("7/13/2010");
var date2 = new Date("12/15/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
alert(diffDays);


// var timeStamp = Math.floor(Date.now() / 1000);

// var dt = new Date(); var utcDate = dt.toUTCString();
// alert(utcDate)
