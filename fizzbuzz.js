// This is our main function
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
        //console.log("Hello, World!");
        console.log(myStr);
    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();

