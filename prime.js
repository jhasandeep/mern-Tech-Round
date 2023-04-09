// Write a program in JS to check whether a number is prime or not?

function isPrime(N){
    
    let count = 0 ;
    for(let i=2 ; i < N ; i++){
        if(N%i === 0){
            count +=1
        }
        
    }
    
    if(count > 0 ){
        return "This is not prime no."
    }
    
    else{
        return "This is a  prime no."
    }
}



let N = prompt("Enter No.");

let result = isPrime(N)

console.log(result)


