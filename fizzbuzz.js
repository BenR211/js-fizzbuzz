// This is our main function

function multiplesOfSeven(currentStr, num){
    if (num % 7 === 0 ){
        if (num % 5 === 0 || num % 3 === 0){
            currentStr += " Bang";
        }
        else {currentStr = "Bang"}
    }
    return currentStr;
}

function multipleOfEleven(currentStr, num){
    if (num % 11 == 0){
        return "Bong";
    }
    return currentStr;
}


function indexOfB(currentStr){
    var index = currentStr.indexOf('B');
    return index;

}

function multipleOfthirteen(currentStr, num){
    if (num % 13 == 0){
        const indx = indexOfB(currentStr)
        if (indx == -1){
            return currentStr += "Fezz";
        }
        else {
            return currentStr = currentStr.substring(0,indx) + "Fezz" + currentStr.substring(indx, currentStr.length);
        }
    }
    return currentStr

}

function fizzbuzz() {

    

    for (var i = 1 ; i < 100; i ++){
        var myStr = "";
        if (i % 3 === 0 && i % 5 === 0){
           myStr = i + " FizzBuzz";
        }
        else if(i % 3 == 0){
            myStr = i + " Fizz";

        }
        else if (i % 5 === 0){
            myStr = i + " Buzz";
        }

        myStr = multiplesOfSeven(myStr, i);
        myStr = multipleOfEleven(myStr, i);
        myStr = multipleOfthirteen(myStr, i);
        
        if (myStr.length == 0){
            myStr = i;
        }
        console.log(myStr);

    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();
//indexOfB("appBle");
//console.log("appBle".substring(0,3));

