// Session 1
// Questions: 1.1, 1.2, 1.4


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1.1 - Is Unique
// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures? 



    // Pseucode: 
    // *** What is meant by this? "What if you cannot use additional data structures?"

        // Does this mean what if I cannot create a new variable to mutate the original string and then check them against each other? Is this a consideration that mostly has to do with adding nested iterators?...thinking of BigO Theory?               
            //Considering the level of complexity we're adding to our code: time to compute and space we're taking up.

        // Do I need to account for capitalization?
        // Can I use new Set on a string? I know it works with arrays. 
        // If not, we could split the string at every character. Assigning it first to a variable we've declared
        // This makes it an array and then we can use new Set
        // Then join the elements in the array
        // Check if the length of the variable we've assigned our new Set to is the same length as our original string
        // return true or false

    const evaluateUniqueStrings = (str) => {
        const uniqueStr = [...new Set(str.toLowerCase())]
        return str.length === uniqueStr.length;
    }

    // Shorter version but less easy to read     *** Developer Empathy ***

    // const evaluateUniqueStrings = (str) => {
    //     return [...new Set(str.toLowerCase())].length === str.length
    // }

    console.log(evaluateUniqueStrings('hippopotamus'));
    console.log(evaluateUniqueStrings('flower'));
    console.log(evaluateUniqueStrings('Fflower'));
       

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        
// 1.2 - Check Permutation
// Given two strings, write a method to decide if one is a permutation of the
// other. 


    // Pseudocode: 
        // Write a function that takes into two string params
        // Check if the strings are the same length
            // If they are continue to check matching characters
            // If not, return false
        // Change string params to lowercase before iterating over them
        // Iterate over first string
        // for each element, check if the second string includes it
            // Does .includes work on strings?   Try it    *** It doesn't work***
                // Must split the string 1st and then use .includes

    const evaluateMatchingChars = (str1, str2) => {
        let result;
        if (str1.length === str2.length) {
            str1.toLowerCase().split('').forEach(char1 => {
                !str2.toLowerCase().split('').includes(char1) ? result = false : result = true;
            })
            return result;
        }
        return false;
    }

    console.log(evaluateMatchingChars('abc', 'aaaa'))
    console.log(evaluateMatchingChars('abc', 'Abc'))


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1.4 - Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 

    // Pseudocode:
        // Write a function that takes in a string as a param
        // String needs to be changed to lowercase 
        // I could iterate over the string
            // increment a lastIndex variable by one (declared outside of loop) each time method loops
            // check if current element is strictly equal to the element found at the index that is the length of the string minus the lastIndex value
        // Declare result variable outside of loop, assigned a value of true
            // if conditinal in loop evaluates to true, assign variable to false
        // Return the result

    const evaluatePalindrome = (str) => {
        let char2Index = 0;
        let result = true;
        str.toLowerCase().split('').forEach((char, index, array) => {
            char2Index++
            if (char !== array[array.length - char2Index]) result = false;
        })
        return result;
    }

    console.log(evaluatePalindrome('shauna'))
    console.log(evaluatePalindrome('Hannah'))