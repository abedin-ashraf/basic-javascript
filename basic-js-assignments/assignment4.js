//Problem 4
function oddFriend(friendsNames) {
    for (let name of friendsNames) {
        if (name.length % 2 != 0) {
            return name;
        }
    }
    //if no name with odd length in the array
    return "No name with odd length";

}

let names = ['sohagu', 'Korimu', 'Jolimu', 'Torimu', 'Karim'];
let oddName = oddFriend(names);
console.log(oddName);