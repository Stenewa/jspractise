
let count=0;

function increment(){
    console.log(alert('Increase number?'))
    count=count+1;
    document.getElementById("count_el").innerText=count;
}
function saveThis(){

 
 let totalNumber="-"+" "+count;
 document.getElementById("print_el").innerText+=totalNumber;
totalNumber=new totalNumber;

} 
function reset(){
    count=0; 
    document.getElementById("count_el").innerText=count;
}