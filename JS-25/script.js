const functions = [
    { name: 'Multiply', func: multiply, file: 'file1.js' },
    { name: 'Get Planet Name by ID', func: getPlanetName, file: 'file2.js' },
    { name: 'Reversed String', func: solution, file: 'file3.js' },
    { name: 'Even or Odd', func: even_or_odd, file: 'file4.js' },
    { name: 'Vowel Count', func: getCount, file: 'file5.js' },
    { name: "Jenny's Secret Message", func: greet, file: 'file6.js' },
    { name: 'Is N Divisible by X and Y?', func: isDivisible, file: 'file7.js' },
    { name: 'Return Negative', func: makeNegative, file: 'file8.js' },
    { name: 'Find Smallest Integer in Array', func: (array) => new SmallestIntegerFinder().findSmallestInt(array), file: 'file9.js' },
    { name: 'Summation', func: summation, file: 'file10.js' },
    { name: 'Get Mean of an Array', func: getAverage, file: 'file11.js' },
    { name: 'Rock Paper Scissors', func: rps, file: 'file12.js' },
    { name: 'Remove First and Last Character', func: removeChar, file: 'file13.js' },
    { name: 'Sum of Positive Numbers', func: positiveSum, file: 'file14.js' },
    { name: 'Basic Mathematical Operations', func: basicOp, file: 'file15.js' },
    { name: 'String Repeat', func: repeatStr, file: 'file16.js' },
    { name: 'Convert String to Array', func: stringToArray, file: 'file17.js' },
    { name: 'Remove String Spaces', func: noSpace, file: 'file18.js' },
    { name: 'Beginner - Lost Without a Map', func: maps, file: 'file19.js' },
    { name: 'Is He Gonna Survive?', func: hero, file: 'file20.js' },
    { name: 'Array Plus Array', func: arrayPlusArray, file: 'file21.js' },
    { name: 'Century from Year', func: century, file: 'file22.js' },
    { name: 'Cat Years, Dog Years', func: humanYearsCatYearsDogYears, file: 'file23.js' },
    { name: 'Total Amount of Points', func: points, file: 'file24.js' }
];

// Generate buttons dynamically
const buttonContainer = document.getElementById('button-container');

functions.forEach(({ name, func, file }) => {
    const button = document.createElement('button');
    button.textContent = name;
    button.onclick = async () => {
        let userInput = prompt(`Enter input for ${name}:`);
        
        // For functions that need specific input formats, handle them accordingly
        if (name === 'Is N Divisible by X and Y?') {
            const [n, x, y] = userInput.split(',').map(Number);
            userInput = { n, x, y };
        } else if (name === 'Get Mean of an Array' || name === 'Summation' || name === 'Array Plus Array') {
            userInput = userInput.split(',').map(Number);
        } else if (name === "Rock Paper Scissors") {
            const [player1, player2] = userInput.split(',');
            userInput = [player1.trim(), player2.trim()];
        }

        // Call the function and get the output
        const output = func(userInput);

        // Display output and code
        document.getElementById('output').textContent = output;
        document.getElementById('code').textContent = `// Code from ${file}\n${func.toString()}`;
    };
    buttonContainer.appendChild(button);
});
