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



function multiplesOfSeventeen(currentStr, num){
    if (num % 17 === 0){
        var num_words = currentStr.length / 4;
        var copy_end = currentStr.length
        var copy_start = currentStr.length - 4;
        var newString = "";
        for (var x = 0; x < num_words; x ++){
            newString = newString + currentStr.substring(copy_start, copy_end);
            copy_start -= 4;
            copy_end -=4;
        }
        return newString;
    }
    return currentStr;
}

function fizzbuzz() {

    

    for (var i = 1 ; i < 300; i ++){
        // This section completes the basic fizzbuzz challenge
        var myStr = "";
        if (i % 3 === 0 && i % 5 === 0){
           myStr ="FizzBuzz";
        }
        else if(i % 3 == 0){
            myStr = "Fizz";

        }
        else if (i % 5 === 0){
            myStr = "Buzz";
        }
        // Here extension rules are applied
        myStr = multiplesOfSeven(myStr, i);
        myStr = multipleOfEleven(myStr, i);
        myStr = multipleOfthirteen(myStr, i);
        myStr = multiplesOfSeventeen(myStr, i);
        
        //print number if is not a multiple of any of the input numbers
        if (myStr.length == 0){
            myStr = i;
        }
        console.log(myStr + " |" + i);

    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();
//indexOfB("appBle");
//console.log("appBle".substring(0,3));

