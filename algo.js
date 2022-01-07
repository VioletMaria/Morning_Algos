function reverse(arr) {
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    console.log(arr)
}

reverse(["a", "b", "c", "d", "e"])

// Get random array output

function getLifesAnswers() {
    var lifesAnswers = [
       "It is certain.",
       "It is decidedly so.",
       "Without a doubt.",
       "Yes – definitely.",
       "You may rely on it.",
       "As I see it, yes.",
       "Most likely.",
       "Outlook good.",
       "Yes.",
       "Signs point to yes.",
       "Reply hazy, try again.",
       "Ask again later.",
       "Better not tell you now.",
       "Cannot predict now.",
       "Concentrate and ask again.",
       "Don't count on it.",
       "My reply is no.",
       "My sources say no.",
       "Outlook not so good.",
       "Very doubtful."
      ];
     
    var randomAnswers = Math.floor(Math.random() * lifesAnswers.length);
    return lifesAnswers[randomAnswers];
    }
   
   console.log(getLifesAnswers());
   
   // Objects

   var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

for(var i=0; i < pokémon.length; i++){
    if(pokémon[i].id % 3 == 0){
    }
    console.log(pokémon[i]);
}

for(var i=0; i < pokémon.length; i++){
    if(pokémon[i].types.length > 1){
        console.log(pokémon[i])
    }
}

for(var i=0; i < pokemon.length; i++){
    if(pokemon[i].types == 'posion'){
        console.log(pokémon[i].name)
    }
}

for(var i=0; i < pokémon.length; i++){
    if(pokémon[i].types[1] == "flying"){
        console.log(pokémon[i].types[0])
    }
}

for(var i=0; i < pokémon.length; i++){
    var reverse = pokémon[i].name.split('').reverse().join('');
    if(pokémon[i].types == "poison"){
        console.log(reverse)
    }
}


// w2d4:

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    

// console.log(arr2d[0][2]);


function isPresent2D(arr2d,value){
    for(var i = 0; i<arr2d.length; i++){
        for(var j = 0; j<arr2d[i].length; j++){
            if(arr2d[i][j] == value){
                return true;
            }
        } 
    }
    return false
}

console.log(isPresent2D(arr2d, 7))

function flatten(arr2d) {
    var flat = [];
    for(var i = 0; i<arr2d.length; i++){
        let current = arr2d[i];
        for(var j=0; j<arr2d[i].length; j++){
        flat.push(current[j]);
        }

    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);

// // Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    var counter = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == ')'){
            counter--
        } 
        if(str[i] == '('){
            counter++
        }
        if(counter < 0){
            return false
        }
    }
    if(counter > 0){
        return false
    } else if (counter == 0){
        return true
    }
}
console.log(parensValid("y(3(p)p(3)r)s"))
console.log(parensValid("n(0(p)3"))
console.log(parensValid("n)0(t(o)k"))


function bracesValid(str) {
    var brackets = 0;
    var parens = 0;
    var braces = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == ')'){
            parens--
        } 
        if(str[i] == '('){
            parens++
        }
        if(str[i] == '}'){
            braces--
        } 
        if(str[i] == '{'){
            braces++
        }
        if(str[i] == ']'){
            brackets--
        } 
        if(str[i] == '['){
            brackets++
        }
        if(parens < 0 || brackets < 0 || braces < 0){
            return false
        }
    }
    if(parens > 0 || brackets > 0 || braces > 0){
        return false
    } else if (parens == 0 || brackets == 0 || braces == 0){
        return true
    }
}
console.log(bracesValid("({[({})]})")) // true
console.log(bracesValid("d(i{a}l[t]o)n{e!")) // false
console.log(bracesValid("{{[a]}}(){bcd}{()}")) // true
console.log(bracesValid("{([}}}")) // false




function parensValid(str) {
    var arr = []
    var rules = {
        '(':')',
        '[':']',
        '{':'}'
    }

    for(var i = 0; i < str.length; i++){

        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            arr.push(str[i]);

        }

        else {
            var last = arr.pop();

            if(str[i] !== rules[last]) {
                return false
            }
        }
    }

    if(arr.length !== 0){
        return false
    }

    return true;
}

answer = parensValid("y(3(p)p(3)r)s")
console.log(answer)
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve



// book index

function bookIndex(arr){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(arr[i]+1 == arr[i+1]){
            var start = arr[i]
            while(arr[i]+1 == arr[i+1]){
                i++
            }
        var end = arr[i]
        newArr.push(start + "-" + end)
        } else {
            newArr.push(arr[i])
        }
    }
    var newString = newArr.join(',')
    return newString
} 
x = bookIndex([1,3,4,5,6,7,8,10,11])
console.log(x)

//

// Use the generateCoinChange function below to receive a dollar (decimal) amount with change. 
// Covert that value to the number of quarters, dimes, nickels, and pennies it would have.
// It should count the number or quarters first then work it's way down from there
// This can return a string or an object or whatever you'd like

// Example: generateCoinChange(.67) would return 2 quarters, 1 dime, 1 nickel, 2 pennies
// Example: generateCoinChange(0.77) would return 3 quarters, 2 pennies
// Example: generateCoinChange(2.85) would return 11 quarters, 1 dime
// Example: generateCoinChange(4.57) would return 18 quarters, 1 nickel, 2 pennies

function generateCoinChange(input) {
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var pennies = 0;
    for(var i = input; input > 25; i-=25){
        quarter += 25
    }

    for(var i = input; input > .10; i-=10){
        dime += 10
    }

    for(var i = input; input > .10; i-=10){
        dime += 10
    }
    // while (input >= .25 )
    // {
    //     quarter += 1 
    //     input -= .25
    // }
    // while (input >= .10)
    // {
    //     dime += 1
    //     input -= .10
    // }
    // while (input >= .05)
    // {
    //     nickel += 1
    //     input -= .05
    // }
    // while (input >= .01)
    // {
    //     pennies += 1
    //     input -= .01
    // }
    var output = "There are " + quarter + " quarter(s) " + dime + " dime(s) " + nickel + " nickel(s) " + pennies + " pennies"
    return output
}

console.log(generateCoinChange(.67))
console.log(generateCoinChange(.67)) 
console.log(generateCoinChange(0.77))
console.log(generateCoinChange(2.85)) 
console.log(generateCoinChange(4.57))