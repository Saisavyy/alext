function calculatePrice() {
    let hours = document.getElementById("hoursInput").value;
    let total = 0;

    if (hours === "" || hours <= 0) {
        document.getElementById("result").innerHTML = "Enter a valid time!";
        return;
    }

    // Logic:
    // 5+ hours = 15/hr
    // 3 hours = 50 fixed
    // 1-2 hours = 20/hr
    if (hours >= 5) {
        total = hours * 15;
    } else if (hours >= 3) {
        total = 50; 
    } else {
        total = hours * 20;
    }

    document.getElementById("result").innerHTML = "Total Amount: ₱" + total;
}