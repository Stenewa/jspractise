count=0;

function cc(cardno) {
	switch(cardno){
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		count++;
		break;
		case 10: 
		case "J":
		case "Q":
		case "K":
		case "A":
		count--;
		break;

	}
	var holdbet="hold your bet";
	if (count>0){
		holdbet="Go ahead and bet";
	}
	return count+"" + holdbet;
}
cc(4);cc(10);cc("A");cc(2);cc(7);
console.log(cc("Q"));


