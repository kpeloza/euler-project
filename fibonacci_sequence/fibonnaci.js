console.log("The Fibonacci sequence is performed by adding the previous two numbers starting with 1 and 2");
console.log("For example the first 10 terms are 1, 2, 3, 5, 8, 13, 21, 34, 55, 89");
console.log("");
console.log("We will sum all even-valued numbers that do not exceed four million")

var fibonacci = function()
{
    var limit = 4000000; //set limit
    var evenSum = 0; //make variable to hold sum of even values
    var initialFirst = 0; //initial F0
    var initialSecond = 1; //initial F1
    var sumOfPreviousTwo = 0; //sum of two previous numbers

    while(sumOfPreviousTwo < limit)
    {
        if(initialFirst %2 ===0)
        {
            evenSum += initialFirst;
        }
        sumOfPreviousTwo = initialFirst + initialSecond;
        console.log("F = " + sumOfPreviousTwo);
        initialFirst = initialSecond;
        initialSecond = sumOfPreviousTwo;
    }
    console.log(evenSum);
};

fibonacci(); //call function