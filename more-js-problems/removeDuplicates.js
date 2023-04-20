const names = ['ashraf', 'habul', 'abul', 'babul', 'chubul', 'tubul', 'kumul', 'ashraf', 'babul', 'tubul'];



function removeDuplicate(names) {
    let uniquenames = [];
    for (const element of names) {
        if (uniquenames.indexOf(element) == -1) {
            uniquenames.push(element);
        }
    }
    return uniquenames;
}

console.log(removeDuplicate(names));