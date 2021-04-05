function createEmptyObj(){
    return Object.create(null);
}

const obj = createEmptyObj();
console.log(Object.getPrototypeOf(obj));