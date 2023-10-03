function getPermutations(string: string): string[] {
    const results: string[] = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        const firstChar = string[i];
        const charsLeft = string.substring(0, i) + string.substring(i + 1);
        const innerPermutations = getPermutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}

function checkForDuplicates(digits: string): boolean {
    const digitsSet = new Set(digits);
    return digits.length !== digitsSet.size;
}

function generatePins(digits: string): string[] {
    if (checkForDuplicates(digits)) {
        throw new Error("Input must not have duplicate digits.");
    }

    if (digits.length === 2) {
    const pinCombinations = new Set<string>();

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                for (let l = 0; l < digits.length; l++) {
                    const potentialPin = digits[i] + digits[j] + digits[k] + digits[l];
                    if (potentialPin.includes(digits[0]) && potentialPin.includes(digits[1])) {
                        pinCombinations.add(potentialPin);
                    }
                }
            }
        }
    }

    return Array.from(pinCombinations).sort();
        return Array.from(pinCombinations).sort();
    } else if (digits.length === 3) {
        const pinCombinations = new Set<string>();
        for (let i = 0; i < digits.length; i++) {
            const newDigits = digits + digits[i];
            const newPermutations = getPermutations(newDigits);
            for (let j = 0; j < newPermutations.length; j++) {
                pinCombinations.add(newPermutations[j]);
            }
        }
        return Array.from(pinCombinations).sort();

    } else if (digits.length === 4) {
        const pinCombinations = new Set<string>(getPermutations(digits));
        return Array.from(pinCombinations).sort();

    } else {
        throw new Error("Input must be 2, 3 or 4 digits.");
    }
}

export { generatePins };