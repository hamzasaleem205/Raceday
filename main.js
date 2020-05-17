let raceNumber = Math.floor(Math.random() * 1000);
let early= true;
let age=25;
if(age>18 && early){
raceNumber +=1000;
}
if(age>18 && early){
console.log(`The race will start at 9:30 am, Your race number is ${raceNumber}`);
}
else if(age>18 && !early){
  console.log(`The race will start at 11:00 am, Your race number is ${raceNumber}`);
}
else if(age<18){
  console.log(`The race will start at 12:30 am, Your race number is ${raceNumber}`);
}
else
{
  console.log(`Please see the registration desk`);
}