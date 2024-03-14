let language = prompt("Enter your language");

if (language === "javascript") {
    let city = prompt("Enter your location");
    if (city === "karachi") {
        let experience = prompt("Enter your experience");
        if (experience === "2years") {
            console.log("conrasulation hire");
        } else {
            console.log("experience barhao");
        }
    } else {
        console.log('Karachi ao');
    }
} else {
    console.log('javascripsekho');
}