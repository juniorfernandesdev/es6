const arr = [1, 3, 4, 5, 8, 9];

//Aroow function
const newArr = arr.map(item => item * 2);

console.log(newArr);


//calback - passagem de função pra outra função




const test = () => {
    return 'teste';
}

console.log(test());