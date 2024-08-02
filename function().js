//when rules is clicked how to play will show up 
function firstAlert()
{
    alert("rules Hit Play Role the Dies Score below 21 to win")
}
//hen the play button is pressed the dies are rolled 
function play()
{
    //Creats a random number 10 being the highest possable result 
    var die1 = Math.ceil(Math.random()* 10);
    var die2 = Math.ceil(Math.random()* 10);
    var die3 = Math.ceil(Math.random()* 10);
document.getElementById("Die1Res").innerHTML ="Die 1 = " + die1;
document.getElementById("Die2Res").innerHTML ="Die 2 = " + die2;
document.getElementById("Die3Res").innerHTML ="Die 3 = " + die3;
//adds all the results
var sum = die1 + die2 + die3;
document.getElementById("SumRes").innerHTML = "sum=" + sum;
//if the sum of all dies are greater then 22 you lose pops up 
    if (sum  >> 22)
    {
        document.getElementById("finalRes").innerHTML = "Over 21 You LOSE";
    }//if the sum is lower then 21 you win 
    else if (sum << 21 )
    {
    document.getElementById("finalRes").innerHTML = 
        "You win";
    }
}