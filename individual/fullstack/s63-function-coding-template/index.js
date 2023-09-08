function countLetter(letter, sentence) {
    // let result = 0;

    // Check first whether the letter is a single character.
    // If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
    // If letter is invalid, return undefined
    
    if (letter.length !== 1) {
        return undefined;
    }

    let count = 0;
    for (const char of sentence) {
        if (char.toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}


function isIsogram(text) {
    // An isogram is a word where there are no repeating letters.
    // The function should disregard text casing before doing anything else.
    // If the function finds a repeating letter, return false. Otherwise, return true.

    const lowerText = text.toLowerCase();
    const charMap = {};

    for (const char of lowerText) {
        if (char !== ' ' && charMap[char]) {
            return false;
        }
        charMap[char] = true;
    }

    return true;

}

function purchase(age, price) {
    // Return undefined for people aged below 13.
    // Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
    // Return the rounded off price for people aged 22 to 64.
    // The returned value should be a string.
    
    if (age < 13) {
        return undefined;
    } else if (age >= 13 && age <= 21) {
        const discountedPrice = price * 0.8;
        return discountedPrice.toFixed(2);
    } else if (age >= 65) {
        const discountedPrice = price * 0.8;
        return discountedPrice.toFixed(2);
    } else {
        return price.toFixed(2);
    }
}

function findHotCategories(items) {
    // Find categories that has no more stocks.
    // The hot categories must be unique; no repeating categories.

    // The passed items array from the test are the following:
    // { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' }
    // { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' }
    // { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' }
    // { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' }
    // { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }

    // The expected output after processing the items array is ['toiletries', 'gadgets'].
    // Only putting return ['toiletries', 'gadgets'] will not be counted as a passing test during manual checking of codes.

    const hotCategories = [];
    const categoryMap = {};

    for (const item of items) {
        if (item.stocks === 0 && !categoryMap[item.category]) {
            hotCategories.push(item.category);
            categoryMap[item.category] = true;
        }
    }

    return hotCategories;
}

function findFlyingVoters(candidateA, candidateB) {
    // Find voters who voted for both candidate A and candidate B.

    // The passed values from the test are the following:
    // candidateA: ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
    // candidateB: ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']

    // The expected output after processing the candidates array is ['LIWf1l', 'V2hjZH'].
    // Only putting return ['LIWf1l', 'V2hjZH'] will not be counted as a passing test during manual checking of codes.
    
    const commonVoters = [];

    for (const voter of candidateA) {
        if (candidateB.includes(voter)) {
            commonVoters.push(voter);
        }
    }

    return commonVoters;
}

module.exports = {
    countLetter,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters
};