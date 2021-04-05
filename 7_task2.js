function hasProperty(str, obj){
    for(let key in obj){
        if(key == str) return true;
    }
    return false;
}

const person = {
    country: "Russia"
};
const student = Object.create(person);
student.age = 20;
student.city = "St.Petersburg";

console.log(hasProperty("age", student));
console.log(hasProperty("country", student));
console.log(hasProperty("name", student));