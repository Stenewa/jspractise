//while loop
var thisAray=[];
var i=0;
while(i<=5){
thisAray.push(i);
i++;
}
console.log(thisAray);
//do while loop. Executes code at least once before running condition
var thisArray=[];
var j=6;
do{
    thisArray.push(j);
    i++;
    }
    while(j<=5)
    console.log(thisArray);
//iterate with for loops
var anArray=[];
//set,condition, uodate
for(var x=5; x>=0;x--){
anArray.push(x);
console.log(anArray);                       
}
//display odd numbers 
var arrayOdd=[];
for(var i=1;i<=9;i+=2){
    arrayOdd.push(i);
    console.log(arrayOdd);
}
//deleting arrays (using pop fx)
var arrayPop=["big","brown","fox","jumps","over","the","lazy","dog"];
for (var i=7;i>=1;i--){
    arrayPop.pop();
    console.log(arrayPop)
}
//deleting arrays using the shift fx
var arrayShift=["big","brown","fox","jumps","over","the","lazy","dog"];
for (var i=7;i>=1;i--){
    arrayShift.shift();
    console.log(arrayShift)
}
//accessing nested arrays  using a nested for loop
var nestArray=[[1,0,2],[0,1,2],[0,2,1]];
var prod=1;
for(var i=0;i<nestArray.length;i++){
    for (var j=0;j<nestArray[i].length;j++){
        prod*=nestArray[i][j];
        console.log(prod);
    }
}