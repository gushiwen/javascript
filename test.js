let arr = [1,2,3,4,5,6]

function test(ppArr) {
    let fnArr = ppArr;
    fnArr[0] = 8;
}
test(arr);
console.log(arr);

let arrCopy = [...arr];
arrCopy[1] = 9;
console.log('arrCopy:', arrCopy);
console.log('arr:', arr);