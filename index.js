// Each Knight has 30 stat points to spend //

// Silver Knight //
var attackWht = knightAtt(5);
console.log("Silver Att: " + attackWht);
var defenseWth = knightDef(10);
console.log("Silver Def: " + defenseWth);
var speedWth = knightSpd(10);
console.log("Silver Spd: " + speedWth);
var luckWth = knightLck(5);
console.log("Silver Lck: " + luckWth);

function silverKnight(){
  var totalPower = attackWht + defenseWth + speedWth + luckWth;
  return totalPower;
}
console.log("Silver Knight Power: " + silverKnight());


// Dark Knight //
var attackDrk = knightAtt(10);
console.log("Dark Att: " + attackDrk);
var defenseDrk = knightDef(5);
console.log("Dark Def: " + defenseDrk);
var speedDrk = knightSpd(5);
console.log("Dark Spd: " + speedDrk);
var luckDrk = knightLck(10);
console.log("Dark Lck: " + luckDrk);

function darkKnight(){
  var totalPower = attackDrk + defenseDrk + speedDrk + luckDrk;
  return totalPower;
}
console.log("Dark Knight Power: " + darkKnight());


// Stat Generator Functions //
function knightAtt(att) {
  return Math.floor(Math.random() * (60 - att) + 5);
}
function knightDef(def) {
  return Math.floor(Math.random() * (80 - def) + 5);
}
function knightSpd(spd) {
  return Math.floor(Math.random() * (30 - spd) + 5);
}
function knightLck(lck) {
  return Math.floor(Math.random() * (100 - lck) + 5);
}


// Fight Simulator Function //
if (silverKnight() === darkKnight()) {
  alert ("Tie!");
} else if (silverKnight() < darkKnight()) {
  alert ("Dark Knight Wins!");
} else {
  alert ("Silver Knight Wins!");
}
