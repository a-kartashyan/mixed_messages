//create a random number generator
//returns a number between 0 and 1 multiplied by any number provided by the user
function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
};
//create multiple arrays with words that will later be inserted into sentences
const starSigns = {
    day: ['good', 'bad', 'okay', 'wonderful', 'horrible'],
    numbers: [2, 3 , 4, 5, 6, 7],
    meet: ['handsome strangers', 'clowns', 'pirates', 'not actually people', 'real estate agents',  'policemen', 'criminals on the loose', 'drug smugglers']

};

//new array to log random messages
let randomMessage = [];

for (let i in starSigns) {
    let indexOfArray = generateRandomNumber(starSigns[i].length);
    switch(i) {
        case 'day':
            randomMessage.push('Your day is looking ' + starSigns[i][indexOfArray] + ' so far.')
            break
        case 'numbers':
            randomMessage.push('You will encounter ' + starSigns[i][indexOfArray] + ' people.')
            break
        case 'meet':
            randomMessage.push('The people you will meet are ' + starSigns[i][indexOfArray] + '.')
            break
    }
}
//form random sentences
function randomHoroscope(text) {
    const formatted = randomMessage.join('\n')
    console.log(formatted)
}

randomHoroscope(randomMessage)