class LeapYear {
    submit: any;
    year: any;

    constructor() {
        this.submit = document.getElementById("submit");
        this.submit.addEventListener("click", (e:Event) => this.leapYear());       
    }

    leapYear(): void {
        this.year = (<HTMLInputElement>document.getElementById("year")).value;
        
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

