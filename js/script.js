function President (name, politicalParty, yearsInOffice, homeState) {
  this.name = name
  this.politicalParty = politicalParty
  this.yearsInOffice = yearsInOffice
  this.homeState = homeState
};

President.prototype.veto = function() {
  return "NO!";
};

President.prototype.passBill = function() {
  return "You can do that!";
};

President.prototype.doCharity = function() {
  return "I like to help people.";
};

President.prototype.conductPressInterview = function() {
  return "I am proud to be an American."
  // where at least I know I'm free
};

President.prototype.sayHi = function() {
  return "Hi, my name is " + this.name + ". I am from " + this.homeState 
  + ". I represent the " + this.politicalParty + "s, and was in office " 
  + this.yearsInOffice + ".";
};

var george = new President("George Washington", "None (what a time to be alive!)", 8, "Virginia");

var abe = new President("Abraham Lincoln", "Republican or Whig", 8, "Kentucky");

var dick = new President("Richard Nixon", "Republican", 8, "Ohio");

var jimbo = new President("Jimmy Carter", "???", 4.5, "Earth");