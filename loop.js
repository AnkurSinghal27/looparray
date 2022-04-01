// for(var i = 0;i<=100;i++){
//     console.log(i);
// }
// for(var i=0;i<=100;i++){
//     if(i%7==0){
//         console.log(i);
//     }
// }
// var sum ="";
// for(var i =0;i<=100;i++){
//      sum = sum+(String(i)+"+");
    
// }
// console.log(sum);
// var s= 0;
// var n="";
// for(var i;i<10;i++){
    // s =s+n;
// }
// console.log(s);


// const prompt=require('prompt-sync')()

// var sum=0
// for(let i=0;i<2;i++){
//     let inp=parseInt(prompt('enter your number'))
//     sum=sum+inp
// }
// console.log(sum);
//
// for(var i=0;i<100;i++){
//     if(i%2==0){
//         // i*-1;
//         console.log(i*(-1));
//     }else{console.log(i);}
// };

// for(i=1;i<5;i++){
//     console.log("working"+ i);
    
// }
// for(i=891;i<931;i++){
//     if(i%3==0){
//         console.log(i);
//     }
// }
// var a=5;
// for(i=0;i<=50;i=i+5){
//     console.log(a+i)
    
// }
// for(i=49;i<=99;i=i+2){
//     // console.log(i);
// }
// var c=1
// for(i=0;i<5;i++){
    
//     for(b=1;b<i;b+2){
//         console.log(c=);
//     } 
//     console.log()
//     // console.log(b);
// }
// const prompt=require('prompt-sync')()

// var sum=0;
// for(let i=0;i<2;i++){
//     let inp=parseInt(prompt('enter your number'))
//     sum=sum+inp
// }
// console.log(sum);
// for(var i=0;i<100;i++){
//     if(i%3==0 && i%7==0){
//         console.log("navgurukul"+i);
//     }
//     else if(i%7==0){
//         console.log("gurukul"+i);
//     }
//     else if(i%3==0 ){
//         console.log("nav"+i);
//     }
//     else{
//         console.log("only"+i);
//     }
// }
// let a ="#";
// for(var result=0;result<5;result++){

//  result= a.repeat(1);

// console.log(result);
// }
// for(i=0;i<100;i++){
//     if(i%1==0 && i%i==0){
//         console.log(i);
//     }
// }
// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// function primes(n){
//     for(let i=2; i<Math.floor(n**0.5); i++){
//         if(n%i === 0){
//             return "not a prime"
//         } 
//     }
//     return "prime"
// }

// let b=""
// for(let i=1;i<=6;i++){
//     for (let j=0; j<i;j++){
//        b+="#"
//     }
//     b+="\n"
// }
// console.log(b)
// let a=""
// for(let i=1;i<=5;i++){
//     for(let j=0;j<i; j++){
//         a = a+1
//     }
//     a+="\n"
// }
// console.log(a)
// let arr=["harry",2,"som"];
// console.log(arr.length);
// let fruit=["h",2];
// console.log(fruit[1])
// var fruit=[1,2,3,4,5,6];
// for(var index=0;index<fruit.length;index++){
// console.log(fruit[index]);
// }
// var array = [ 1, 2, 3, 4, 5, 6 ];
// for (var index = 0; index < array.length; index++) {
// console.log(array[index]);
// }
// var myFavouriteFruits = ["Mango", "Orange", "Banana"];

// console.log(myFavouriteFruits.pop());
// let myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.push("Basketball");
// console.log(myFavouriteGames);
// let myFavouriteGames = ["Chess", "Ludo", "Badminton","cricket"]
// console.log(myFavouriteGames.splice(2,1));
// console.log(myFavouriteGames);
	// numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
	// var count_element=0;
	// for(var i=0; i<numbers.length;i++){
	//    count_element++
	// }
	// console.log(count_element);
    // var a = "amit";
    // //  a.repeat(10);
    // console.log(a.repeat(10),"\n");

//    var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
//     // var b = Math.max(numbers);
//     console.log(Math.max(numbers));
// var numbers=[50,40,23,70,56,12,5,10,7];
// 	var max_num=0;
// 	for(var i=0; i<numbers.length;i++){
// 	   if (numbers[i]>max_num){
// 	       max_num=numbers[i]
//        }
          
	 
// 	//    }console.log(max_num);
//     }console.log(max_num);

// numbers.sort(function(a, b){return b - a});
// numbers.reverse(function(a, b){return b - a});
// let b=Math.max(...numbers);
// console.log(numbers[1]);

// reversed array
// var a = [10,20,30,40,50,50];
// var rev = [];
// for(var i =a.length-1;i>=0;i--){
// 	rev.push(a[i]);
// }
// console.log(rev);
// pallidrome
// var arr =["m","o","m"];
// var new_arr =[];
// for(var i=arr.length-1;i>=0;i--){
// 	new_arr.push(arr[i]);
// }
// console.log(new_arr);

// compare of two list
// var a=[1,2,3,4,5,6];
// var b=[1,2,0,1,5,6];
// var element=[];
// for(var i of a){
// 	if(!b.includes(i)){
// 		element.push(i);
// 	}
	
// }console.log(element);
// add of array values
// var marks = [
// 		   [78, 76, 94, 86, 88],
// 		   [91, 71, 98, 65, 76],
// 		   [95, 45, 78, 52, 49]
// 		];
// 		var sum=0;
// 		for(var i of marks){
// 		   for(var j of i){
// 		       sum+=j
// 		   }
// 		}
// 		console.log(sum);
// count odd even in a array
// var arr=[23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var odd_number = 0;
// var even_number = 0;
// for(var i of arr){
// 	if(i%2==0){
// 		even_number +=1;
// 	}else{
// 		odd_number +=1;
// 	}
// }
// console.log(even_number);
// console.log(odd_number);
// sum of odd and even
// var arr=[23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var odd_number = 0;
// var even_number = 0;
// for(var i of arr){
// 	if(i%2==0){
// 		even_number +=i;
// 	}else{
// 		odd_number +=i;
// 	}
// }
// console.log(even_number);
// console.log(odd_number);
// function
// function saybye(username){
// 	return "bye" +" "+username;
// }
// console.log(saybye("harry"));
//mulply fuction
// function displaymultiply(n1,n2,n3){
// 	return n1*n2*n3;
// }
// console.log(displaymultiply(2,3,4));



// function check_no_list(list1,list2){
// 	for(i=0;i<6;i++){
// 		if(list1%2==0 || list2%2==0){
// 			console.log("dono even hai")
// 		}
// 		else{
// 			console.log("dono even nahi h")
// 		}
// 	}

// }
// check_no_list([2,6,18,10,3,75],[6,19,24,12,3,87])

// function check for voting
// function eligibleforvote(age){
// 	if (age>=18){
// 		console.log("eligible")
// 	}else{
// 		console.log("not eligible");
// 	}
// 	return age;
// }
// console.log(eligibleforvote(23));

// perfect No
// function perfect(num){
// 	var sum=0;
// 	for( var i = 1; i < num ; i++){
// 		if(num%i==0){
// 			sum+=i
// 		}
// 	}
// 	if(sum==num){
// 		console.log(num,"perfect");
// 	}
// 	else{
// 		console.log(num,"not");
// 	}
// }
// perfect(6);

// function perfect(num){
// 	var sum=0
// 	for(var i=1;i<num;i++){
// 		if(num%i === 0){
// 			sum+=i
// 		}
// 	}
// 	if(sum === num){
// 		console.log(num," is a perfect number");
// 	}
// 	else{
// 		console.log(num," is not a perfect number");
// 	}
// }
// perfect(6);
// average
// const prompt= require('prompt-sync')()
// function average(num1,num2,num3){
// 	console.log("sum of three numbers -",num1+num2+num3);
// 	console.log("Average of three numbers -",(num1+num2+num3)/3);
//  }
  
// //  const input = require('readline-sync');
//  let number1 = parseInt(prompt('Enter the number1 :- '));
//  let number2 = parseInt(prompt('Enter the number2 :- '));
//  let number3 = parseInt(prompt('Enter the number3 :- '));
//  average(number1,number2,number3);


