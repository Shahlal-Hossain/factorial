let numbers = [12, 21, 23, 22, 45, 213, 6543, 33, 44, 55, 232, 98, 89,890, 88, 99, 67, 76, 55, 56, 65, 45, 54, 123, 456, 789, 098, 876, 432, 1234, 09876, 3456, 89, 678, 653 ]

let numbers1 = [12, 21, 11, 22, 43, 34, 55, 43, 23, 7777, 676, 564, 989,65, 56]

// for(let i = 0; i<array.length; i++ ){
//     if( array[i] % 2 == 0 ){
//         evenNumbers.push(array[i])
//     }
//     else if( array[i] % 2 == 1){
//         oddNumbers.push(array[i])
//     }
// }
function nowtest(array){
    let evenNumbers = []
    let oddNumbers = []
    for(let i = 0; i<array.length; i++ ){
        if( array[i] % 2 == 0 ){
            evenNumbers.push(array[i])
        }
        else if( array[i] % 2 == 1){
            oddNumbers.push(array[i])
        }
    }
   console.log("even num",evenNumbers)
   console.log("odd num",oddNumbers) 
}
nowtest(numbers1)

