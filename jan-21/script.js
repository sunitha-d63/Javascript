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
    case month > 70 && month <60 :
        console.log("Grade B");
        break;
    case month > 60 && month < 40:
        console.log("Grade c");
        break;
        case month > 30:
            console.log("Grade D");
            break;
  default:
        console.log("fail")
}




