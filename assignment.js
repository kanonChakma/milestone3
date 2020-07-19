function feetToMile(feet){
	if(feet==0){
		return 'distance are always greater than zero';
	}
	else{

        return (0.000189*feet).toFixed(4);
    }
}
var mile=feetToMile(5280);
console.log(mile);

function woodCalculator(chair,table,bed)
{
	return chair*1+table*3+bed*5;
}
var totalWood=woodCalculator(5,5,5);
console.log(totalWood);

function brickCalculator(ground) {
	if(ground==0){
		return "No need bricks";
	}
	else{
      let brick=0; 
      if(ground>20){

      	brick+=(ground-20)*1000;
        ground=ground-(ground-20);
      }
      if(ground>10 && ground<=20){

      	brick+=(1.2*(ground-10))*1000;
      	ground=ground-(ground-10);
      }
      if(ground>=1 && ground<=10){

      	brick+=(1.5*ground)*1000;
      }
      return brick;
	}
}
console.log(brickCalculator(9));

function tinyFriend(array)
{
	if (array=="") 
    {
     return 'This array are empty';
	}
	else
	{
	   let smallLengthName=array[0];
	   for (var i = 0; i < array.length; i++) 
		 {
		 	  if(array[i].length<smallLengthName.length)
		 	  {
		 	  	smallLengthName=array[i];
		 	  }
		 }
		 return smallLengthName;
 	}	
}
var myFriend=['setu','kritto','rubi','hi','j'];
console.log(tinyFriend(myFriend));



