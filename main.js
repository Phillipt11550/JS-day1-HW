let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dog_string, dog_names){
    let matchFound = false;
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.toLowerCase().includes(dog_names[i].toLowerCase())){
            console.log("Matched " + dog_names[i]);
            matchFound = true;
        }
    }
    if(!matchFound){
        console.log("No Matches");
    }
}

// Call the function with parameters
findWords(dog_string, dog_names);


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

// Call the function with parameters
console.log(replaceEvens(arr));