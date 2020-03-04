module.exports = function createDreamTeam( members ) {
    if (!Array.isArray(members)) {
        return false;
    }
    let arr = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            let element = members[i].trim();
            arr.push(element[0].toUpperCase());
           }
    }
    return arr.sort().join('');
}
