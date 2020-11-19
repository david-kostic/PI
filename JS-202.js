let d_tri = "Fizz";
let d_pet = "Buzz";
let d_sve = "FizzBuzz";

for(let counter = 1; counter <= 100; counter+=1){
    if (counter%3==0 && counter%5==0){
        console.log(d_sve);
    }
    else if (counter%3==0){
        console.log(d_tri);
    }
    else if (counter%5==0){
        console.log(d_pet);
    }
    else{
        console.log(counter)
    }
}
