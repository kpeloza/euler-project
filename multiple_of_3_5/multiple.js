console.log("This simple script will list all natural numbers below 1,000 that are multiples of "
+ "3 or 5 and sum them");
console.log("For example, the natural numbers below 10 are 3, 5, 6, and 9 while the sum is 23");

var moduloFunction = function()
{
    var sum = 0;
    var limit = 1000;

    //for loop to first figure out all natural numbers
    for(var i =0; i<= limit; i++)
    {
        if(i % 3 === 0 || i % 5 === 0)
        {
            sum += i;
        }
        console.log(i, sum);
    }
};

moduloFunction();



