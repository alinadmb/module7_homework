function showOwnProperties(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key} - ${obj[key]}`);
        }
    }
}

const person = {
    country: "Russia"
};
const student = Object.create(person);
student.age = 20;
student.city = "St.Petersburg";
showOwnProperties(student);
