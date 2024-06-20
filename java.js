let object = {}
let num = +prompt("How many times: ")

for (let i = 0; i < num; i++) {
    var name1 = prompt("Enter name: ")
    var age = +prompt("Enter age: ") 

    object[i] = {
        name: name1,
        age: age
    } 
    console.log(`User: ${i}`);
    console.log("Age: " + object[i].age);
    console.log(`Name: ${object[i].name}`);
}
console.log(object);


let str =" Repellendus maxime vero perspiciatis nisi, illo voluptates distinctio laudantium iste impedit fugiat iusto, in quis, necessitatibus officiis id quisquam animi asperiores sunt."

let count = 0
let arr = str.split("")

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "e"){
        count++
    }if (arr[i] == "a"){
        count++
    }if (arr[i] == "i"){
        count++
    }if (arr[i] == "o"){
        count++
    }if (arr[i] == "u"){
        count++
    }
}
console.log("Unli harf: " + count);