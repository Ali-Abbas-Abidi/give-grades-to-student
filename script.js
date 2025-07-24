let marks = prompt("enter student marks : ");
console.log(marks);

if(marks >= 80 && marks <= 100){
    console.log("grade : A")
} 
else if(marks >= 70 && marks <= 89){
    console.log("grade : B")
}
else if(marks >= 60 && marks <= 69){
    console.log("grade : C")
}
else if(marks >= 50 && marks <= 59){
    console.log("grade : D")
}
else if(marks >= 0 && marks <= 49){
    console.log("grade : F")
}
else{
    console.log("you entered invalid number")
}
