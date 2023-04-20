let friends = ['ashraf', 'mohammed', 'nurul', 'abedin', 'kajak'];

function bestfriend(friends) {
    let len = 0;
    let name = '';
    for (let friend of friends) {
        if (friend.length > len) {
            len = friend.length;
            name = friend;
        }
    }
    return name;
}

console.log(bestfriend(friends));