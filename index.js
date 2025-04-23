
// 1. Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a 
// switch statement to print what type of delivery is scheduled on each day.

function deliveryType (deliveries){
    deliveries.forEach(delivery =>{
        switch (delivery) {
            case 'Mon':
                console.log('door to door delivery');
                break;
            case 'Tue':
                console.log('overnight delivery');                
                break;
            case 'Fri':
                console.log('on demand delivery');
                break;        
            default:
                console.log('no delivery done');                
                break;
        }
    })
};
const deliveries = ['Mon','Tue','Wed','Fri']
deliveryType(deliveries)

// 2.Create a program that loops through an array of book statuses and prints "Ready to lend" 
// if the status is "available" or "Checked out" if the status is "borrowed".
function bookStatus(statuses){
    statuses.forEach(element =>{
        switch(element){
            case 'available':
                console.log('Ready to lend');
                break;
            case 'borrowed':
                console.log('Checked out');
                break;
            default:
                console.log('not available');
                break;                   
                    
                
        }})

};
let statuses = ['available', 'borrowed', 'borrowed', 'available']
bookStatus(statuses)


// 3.Given an array of customer ages, write a program that checks each age and prints 
// "Adult" if the age is 18 or above, and "Minor" otherwise.

function adultOrMinor(ages){
    ages.forEach(age =>{
        if(age>=18){
            console.log("Adult");
            
        }else if(age<18){
            console.log("Minor");
            
        }
    })};
    const ages = [20,18,40,9,36,10,15,60]
    adultOrMinor(ages)


// 4.Write a program using a while loop that simulates a countdown of lives in a game 
// starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
const gameCountDown = () =>{
    let count = 5;
    while(count >=0 && count <=5){
        console.log(`You have ${count} lives left`);
        count--;
        
    }
};
gameCountDown();


// 5.Using a do...while loop, write a program that loops through an array of user feedback
//  and prints each comment until the array is empty.
function userFeedback(feedbacks){
    do{
        console.log(feedbacks.pop());
    }while(feedbacks.length >0)
    };
    const feedbacks =["Your app is good","I don't like UI","The costumer support is not working"];
    userFeedback(feedbacks)


// 6.Write a program that loops through an array of user login statuses and prints "Welcome 
// back!" if the user is "logged in" or "Please log in" otherwise.

function userStatus(arr){
    arr.forEach(element => {
        if(element=="logged in"){
            console.log("Welcome back!");
            
        }else {console.log("Please log in");
        }
    })
};
const arr = ["new user", "logged in","new user","logged in"]
userStatus(arr)

// 7.Write a program that processes an array of support ticket priorities using a switch 
// statement to print how quickly each one should be addressed based on whether the priority
//  is "low", "medium", or "high".
function supportTicketPriorty(ticketPriorty){
    ticketPriorty.forEach(ticket =>{
        switch(ticket){
            case 'low':   
                console.log('can be addressed late');
                break;
            case 'medium':
                console.log('prioritize but not urgent');
                break;
            case 'high':
                console.log('to be addressed urgently');
                break;
            default:
                console.log('does not support priority');
                break;               
                       
        }
    })};
    const ticketPriorty = ['low','medium','high']
    supportTicketPriorty(ticketPriorty)


// 8.Create a while loop that simulates a quiz countdown from 10 seconds, printing each 
// number until it reaches 0.

const countdown = () =>{
    let count = 10;
    while(count >=0 && count <=10){
        console.log(`Countdown is ${count}`);
        count--;
        
    }
};
countdown();