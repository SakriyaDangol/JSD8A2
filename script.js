var runNumber = prompt('Type "Number" :');
var numberArray = [1, 2, 3, 4, 5];

if (runNumber == 'Number'){
    for (let i in numberArray){
        document.write(i + '-position' + ' = ' + '\n'); // this statement prints the position of the item from the array
        document.write(numberArray[i]+ '-item' + ',' + '\n'); // this statement prints the item from the array
    }
} else {
    alert('Oof.... You have a brain of an insect!!');
}

document.write('<br>'); // this statement breaks a line

var runString = prompt('Type "String" :');
var stringArray = ['apple', 'banana', 'carrot', 'daisy'];

if (runString == 'String'){
    for (let i in stringArray){
        document.write(i + '-position' + ' = ' + '\n'); // this statement prints the position of the item from the array
        document.write(stringArray[i]+ '-item' + ',' + '\n'); // this statement prints the item from the array
    }
} else {
    alert('Ah yes... hello insect brain IDIOT!!');
}