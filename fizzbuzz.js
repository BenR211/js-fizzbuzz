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


function fizzbuzz() {

    var myStr = "";

    for (var i = 1 ; i < 100; i ++){
        if (i % 3 === 0 && i % 5 === 0){
           myStr = i + " fizzbuzz";
        }
        else if(i % 3 == 0){
            myStr = i + " fizz";

        }
        else if (i % 5 === 0){
            myStr = i + " buzz";
        }
        else {
            myStr = i;
        }

        myStr = multiplesOfSeven(myStr, i);
        myStr = multipleOfEleven(myStr, i);
        console.log(myStr);

    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();

