console.log("Student hub Javascript loaded successfully");
console.log("Welcome to Student hub");
console.log("Practical 4 - Javascript");;

let StudentName="Keya";
let course="IT";
let semester=3;
console.log(StudentName);
console.log(course);
console.log(semester);

let college="CHARUSAT";
let year=2026;
let isStudent=true;
console.log(college);
console.log(year);
console.log(isStudent);

function WelcomeMessage(){
    console.log("Welcome to StudentHub");
}

WelcomeMessage();

function WelcomeStudent(name){
    console.log("Welcome "+name);
}
WelcomeStudent("Keya");
WelcomeStudent("Hardi");
WelcomeStudent("Dhyanam");

let heading=document.getElementById("welcomeheading");

const images = [
    "../images/newbanner.jpeg",
    "../images/cspit.jpeg",
    "../images/gate.jpeg"
];

let currentImage = 0;

const sliderImage = document.getElementById("sliderImage");

const nextButton = document.getElementById("nextButton");

const prevButton = document.getElementById("prevButton");


function showImage(index) {

    currentImage = index;

    sliderImage.src = images[currentImage];

}


nextButton.addEventListener("click", function () {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage(currentImage);

});


prevButton.addEventListener("click", function () {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage(currentImage);

});