module.exports = function transform( arr ) {
if (!Array.isArray(arr)) {
    throw new Error();
} 
let array =[];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
        i++;
    }else if (arr[i] === '--discard-prev') {
        array.pop();
    }else if (arr[i] === '--double-next') {
        array.push(arr[i + 1])
    }else if (arr[i] === '--double-prev') {
        array.push(arr[i -1])
    }else{
        array.push(arr[i]);
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] == undefined) {
        array.splice(i,1);
    }
}
return array;
};
