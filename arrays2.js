
let teams = ["Brazil", "Germany", "Italy"];
let fruits = ["apple", "orange", "banana", "kiwi", "strawberry"];
let instructors = ["Mshary", "Hasan"];
function isArrayLengthOdd(numbers){
   if(numbers.length % 2 == 1){
	return true;
}else{
	return false
}
}

function isArrayLengthEven(numbers){
   if(numbers.length % 2 == 0){
        return true;
}else{
        return false
}
}

function addLailaToArray(instructors){
  instructors.push("laila");
  return instructors;
}

function eleminateTeam(teams){
        
    return teams.pop();
}

function secondHalfOfArrayIfItIsEven(fruits){
        if(fruits.length % 2 == 0){
           return fruits.slice(fruits.length/2, fruits.length);    
        }else{
           return [];
        }
}

function youGottaCalmDown(shout){
        let position = shout.indexOf("!");
       if(position == -1 || position == shout.length){
        return shout;
       }
        else{
                return shout.slice(0, position +1);
        }
}

console.log(isArrayLengthOdd(teams))


