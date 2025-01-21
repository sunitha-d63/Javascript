// Discounts Based on Membership Level
let level = "Silver";
switch (level) {
    case "Bronze":
        console.log("Bronze 60%");
        break;
    case "Silver":
        console.log("Silver 70%");
        break;
    case "Gold":
        console.log("Gold 80%");
        break;
    case "Platinum":
        console.log("Platinum 90%");
        break;
    default:
        console.log("Please enroll")
}

// Determine the Season Based on the Month

let month = 12;
switch (true) {
    case month > 11:
        console.log("winter");
        break;
    case month > 6 && month < 8:
        console.log("rainy");
        break;
    case month > 4 && month < 5:
        console.log("summer");
        break;
    case month > 1 && month < 3:
        console.log("monsoon");
        break;
    default:
        console.log("number")
}

// Type of Vehicle Based on Number of Wheels
let wheel = "wheel-2";
switch (wheel) {
    case "wheel-2":
        console.log("Bicycle and Motorcycle");
        break;
    case "wheel-4":
        console.log("Car");
        break;
    case "wheel-8":
        console.log("Truck");
        break;
    default:
        console.log("none")
}


// Menu Selection in a Restaurant
let Menu = "mutton";
switch (Menu) {
    case "chicken":
        console.log("Fried chicken");
        console.log("chicken-Biryani");
        break;
    case "mutton":
        console.log("Mutton-chukka");
        console.log("Mutton-Biryani");
        break;
    case "fish":
        console.log("fish-fingers");
        console.log("fish-Biryani");
        break;
    default:
        console.log("other")
}

// Day of the Week Planner
let DayPlan = "";
switch (DayPlan) {
    case "Monday":
        console.log("Playing");
        break;
    case "Tuesday":
        console.log("Painting");
        break;
    case "Wednesday":
        console.log("Sports");
        break;
    case "Thursady":
        console.log("Dance");
        break;
    case "Friday":
        console.log("Test");
        break;
    case "Sat":
        console.log("movie");
        break;
    case "sunday":
        console.log("outing");
        break;
}


// Student Mark Score card


let Mark = 90;
switch (true) {
    case Mark > 80:
        console.log("Grade A");
        break;
    case Mark > 70 && Mark <60 :
        console.log("Grade B");
        break;
    case Mark > 60 && Mark < 40:
        console.log("Grade c");
        break;
        case Mark > 30:
            console.log("Grade D");
            break;
  default:
        console.log("fail")
}


// Eligibility Check For a Loan (income , cibilscore)

let income = 300000;
let cibilScore=750;

if (income >= 30000) { 
    if (cibilScore >= 750) 
        {
        console.log("loan eligible");
    } else {
        console.log("low cibil score , not eligible.");
    }
} else {
    if (cibilScore < 750) {
        console.log("low income and low CIBIL score");
    } else {
        console.log("You are not eligible for the loan due to low income.");
    }
}


// User Access Control Based on Role and Subscription Level

let role="editor";
let subscription="premium"

if (role === 'admin') {
    console.log("Admin has full access");
} else if (role === 'editor') {
    if (subscription === 'premium') {
        console.log("Editor access");
    } else if (subscription === 'basics') {
        console.log("Editor limited access");
    } else {
        console.log("Invalid subscription level");
    }
} else if (role === 'viewer') {
    console.log("Viewer has read-only access.");
} else {
    console.log("Invalid");
}


// Student Mark Grade 
let totalmark=90;
if(totalmark>80)
{
    console.log("Grade A");
}
else{
    if (totalmark > 70 && totalmark <60)
    {
        console.log("grade B");
    }
    else{
        if(totalmark > 60 && totalmark < 40)
        {
            console.log("grade c");
        }
        else{
            console.log("fail");
        }
    }
   
}


// User Role Authorization
let user="admin"

    if (user) {
        if (user === "admin") {
            console.log("Welcome");
        } else if (user === "editor") {
            console.log("edit file");
        } else if (user === "viewer") {
            console.log("just view");
        } else {
            console.log("new user");
        }
    } else {
        console.log("logout");
    }
