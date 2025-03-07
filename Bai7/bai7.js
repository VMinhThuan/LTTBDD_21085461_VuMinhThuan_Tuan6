// Task 1: Create objects for Mark and John with properties full name, mass, and height
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    // Task 2: Method to calculate BMI
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    // Task 2: Method to calculate BMI
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

// Task 3: Calculate BMI for both Mark and John
mark.calcBMI();
john.calcBMI();

// Task 3: Compare BMIs and log the result to the console
function compareBMI() {
    if (mark.bmi > john.bmi) {
        console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
        return `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`;
    } else if (john.bmi > mark.bmi) {
        console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
        return `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`;
    } else {
        console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
        return `${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`;
    }
}

// Display the result on the webpage
document.getElementById('results').innerHTML = compareBMI();
