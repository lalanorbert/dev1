/**
 * Exo 1 consists in finding the superDigit which is done very easily 
 * in a recursive way. It is simply the sum of all the numbers composing the value
 * The parameters n defines the initial string, and k defines the number of repetitions of n
 * @param {string} value : contains the values of n and k separated by space
 * @returns a single int which is the super digit of the value
 */
export function superDigit(value){
    // object destructuring to retrieve the values
    let [n,k] =  value.split(" ");
    // apply the repetition using the repeat method
    let number = n.repeat(parseInt(k));
    
    // calculate the sum of each number inside of the value
    let sum = number.split("").reduce((acc, val) => acc + parseInt(val), 0);
    
    // if the sum is a single number, return it
    if (sum.toString().length == 1)
        return sum;
    // else make a recursion with k = 1
    return superDigit(sum+" "+1)
}