var primeFactor = function(number)
{
    var primeFactor = 0;
    
    for(var i = 1; i<number; i++)
    {
        if(number % i ===0)
        {
            primeFactor = i;
        }
    }
    console.log(primeFactor);
};

primeFactor(26);