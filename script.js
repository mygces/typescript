"use strict";
class LeapYear {
    constructor() {
        this.submit = document.getElementById("submit");
        this.submit.addEventListener("click", (e) => this.leapYear());
    }
    leapYear() {
        this.year = document.getElementById("year").value;
        if (this.year === "") {
            alert('Please enter a year');
            return;
        }
        if (((this.year % 4 == 0) && (this.year % 100 != 0)) || (this.year % 400 == 0)) {
            alert('This is a Leap Year');
        }
        else {
            alert('This is NOT a Leap Year');
        }
    }
}
new LeapYear();
