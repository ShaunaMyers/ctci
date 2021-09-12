// Session 2
// Questions: 1.6, 1.7, 1.8

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1.6 - String Compression: 
// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string a a b c c c c c a a a would become a 2 b l c 5 a 3 , If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

    // Pseudocode:
        // I am making the assumption that we will compress uppercase & lowercase letters separately
        // Write a function that has one param, which will be a string
        // Declare variable, this will be a counter so initial value is 1
        // Declare compressedString variable, this will be assigned an initial value of ''
        // Iterate over the string param
            // If you are using forEach you will have to split the string 1st (to change the data type to an array)
            // params for forEach will be current element (char), index, array
        // If the current character is the same as the character at the next index number (so, current index + 1) 
            // Increment our counter by 1
            // If not, add to the compressed string variable
            // Then assign counter value of 1
        // If compressedArray length === to original string length
            // return original string
        // Else return compressed string 


        const compressString = (str) => {
            let counter = 1;
            let compressedStr = ''

            str.split(' ').forEach((char, index, array) => {
                if (char === array[index + 1]) {
                    counter++
                } else {
                    compressedStr += `${char} ${counter} `;
                    counter = 1;
                }
            })

            if (compressedStr[compressedStr.length - 1] === ' ') {
                compressedStr = compressedStr.slice(0, -1)
            }
            return compressedStr.length > str.length ? str : compressedStr;
        }

        console.log(compressString("a a b c c c c c a a a"));
        console.log(compressString("a a b c a a"));
        console.log(compressString("A a a a b B B b b b c C c c A A A A A"));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1.7 - Rotate Matrix: 
// Given an image represented by an NxN matrix, where each pixel in the image is an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotateImage = (array) => {
    // declare temp variable and assign index 2 of first array to it
    // Move value of index 0 of first array (matrix[0]) to index 2 of first array
    // Move value of index 0 of last array to index 0 of first array
    // Move value of index 2 of last array to index 0 of last array
    // Move value from temp variable to index 2 of last array
    // assign temp variable to value of index 2 of second array
    // Move value of index 1 of first array to value of index 2 of second array
    // Move value of index 0 of second array to value of 1 of first array
    // Move value of index 1 of last array to index 0 second array
    // Move value of temp variable to index 1 of last array
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1.8 - Zero Matrix: 
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0.