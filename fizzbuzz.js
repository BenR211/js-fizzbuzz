// This is our main function
function fizzbuzz() {

    for (var i = 0 ; i < 100; i ++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log(i + " fizzbuzz");
        }
        else if(i % 3 == 0){
            console.log(i + " fizz")

        }
        else if (i % 5 === 0){
            console.log(i + " buzz");
        }
        //console.log("Hello, World!");
    }

    // Put your code here...

}

// Now, we run the main function:
fizzbuzz();

