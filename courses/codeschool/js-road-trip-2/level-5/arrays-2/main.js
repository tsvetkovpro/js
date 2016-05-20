// using loop with arrays

var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
for (var i = 0; i < numberList.length; i++) {
    console.log("The value in cell " + i + " is " + numberList[i]);
}


// empty cells in array
var passengers = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
passengers[5] = undefined;
console.log(passengers);


// let's count even numbers and erase odd's
var numberList1 = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
var evenCount = 0;
for (var i = 0; i < numberList1.length; i++) {
    if (numberList1[i] % 2 == 0) {
        evenCount++;
    } else {
        numberList1[i] = undefined;
    }
}
console.log("\n");
console.log(evenCount);
console.log(numberList1);
console.log(numberList1.length);


//building a passenger list

function addPassenger (name, list) {
    if (list.length == 0) {
        list.push(name);
    } else {
        for (var i = 0; i < list.length; i++) {
            if (list[i] == undefined) {
                list[i] = name;
                return list;
            } else if (i == list.length - 1) {
                list.push(name);
                return list;
            }
        }
    }
}

function deletePassenger (name, list) {
    if(list.length == 0){
        console.log("List is empty");
    } else {
        for(var i = 0; i < list.length; i++) {
            if(list[i] == name){
                list[i] = undefined;
                return list;
            } else if (i == list.length - 1) {
                console.log("Not found");
            }
        }
    }
    return list;
}

var passengerList = ["1111", "2222"];
passengerList = addPassenger("String Name", passengerList);
passengerList = deletePassenger("1111", passengerList);
passengerList = addPassenger("New string", passengerList);
passengerList = deletePassenger("1111", passengerList);
console.log(passengerList);



var my = [];



















