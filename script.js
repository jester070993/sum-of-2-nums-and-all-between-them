let number1 = document.querySelector(".input1");
let number2 = document.querySelector(".input2");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let tot = document.querySelector(".tot");
let btwn = document.querySelector(".btwn");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {

    val1 = number1.value;
    val2 = number2.value;

    if (isNaN(number1.value) || isNaN(number2.value)){
        alert("Only integers are accepted");
        number1.value = " ";
        number2.value = " ";
    } 
    else if (number1.value == "" || number1.value == "") {
        alert("Only integers are accepted");
    }

    else {
        //removes decimal from number if declimal provided
        let val1 = Math.trunc(number1.value)   
        let val2 = Math.trunc(number2.value)   
        let myArr = [];
        //pushs each inputed value into created array
        myArr.push(val1);
        myArr.push(val2);
        //finds the max and min from that array, using the spread opperator(individally splits array to be used as seperate values)
        let min = Math.min(...myArr);
        let max = Math.max(...myArr);
        //creates array that is now in order from min to max
        let orderedArr = [min, max];
        one.innerHTML = `${min} is the smallest number, while`;
        two.innerHTML = `${max} is the largest number.`;
        tot.innerHTML = `The total of these values are ${min + max}.`;
        //finds the range between the min in max, in order to know how many times the loop should go,
        //starting on the value or the min, and stopping at the max (AKA, the range)
        let range = max - min;
        let betweenTotal = 0;
        let betweenArr = [];
        //these values pushed into new array
        for (let i = 1; i < range; i++) {
            betweenArr.push(min + i);
        }
        //adding all values together in new array with reduce function 
        let grandTotal = betweenArr.reduce((total, current) => (total + current)) + (min + max);
        btwn.innerHTML = `The sum of all the values in between, including the two outside numbers, is ${grandTotal}`;
    }
    
});