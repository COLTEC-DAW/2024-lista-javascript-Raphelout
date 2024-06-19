for(let i = 1; i<=100; i++){
    if(i%5===0 || i%3===0){
        if(i%5===0 && i%3===0){
            console.log("FizzBuzz");
        }else if(i%3===0){
            console.log("Fizz");
        } else{
            console.log("Buzz");
        }
    }else{
        console.log(i);
    }
}