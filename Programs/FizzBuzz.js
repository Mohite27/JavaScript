function fizzBuzz(num){

    for(var i=1;i<=num;i++){
        if(i % 15 === 0) {console.log('FizzBuzz')
    document.getElementById("h3Id").innerText = "FizzBuzz"}
    else if(i % 3 === 0) {console.log("Fizz")
    document.getElementById("h3Id").innerText = "Fizz" 
}
    else if(i % 5 === 0) {console.log('Buzz')
    document.getElementById("h3Id").innerText = "Buzz"
}else {console.log(i)
        document.getElementById("h3Id").innerText = i
    }

    }
    
}

fizzBuzz(30);

