var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolate, color, count){
    for(let i=0; i<count; i++)
        chocolate.unshift(color);
    return "Chocholates added";
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolate, number){
    for(let i=0; i<number; i++)
        chocolate.shift();
    return number;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolate, number){
    let ch = [];
    for(let i = chocolate.length-1; i>=chocolate.length-number; i--)   
        ch.push(chocolate[i]); 
    return ch;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolate, number, color){
    let ch = [];
    for(let i = chocolate.length-1; i>=chocolate.length-number; i--)
        if(chocolate[i] == color)
            ch.push(chocolate[i]);
    
    if(ch.length == 0)
        return "Favorite chocolate not present!";
    else
        return ch;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolate){
    let count = [0,0,0,0,0,0,0];

    for(let i=0; i<chocolate.length; i++){
        if(chocolate[i] == "green")
           count[0]++;
        if(chocolate[i] == "silver")
           count[1]++;
        if(chocolate[i] == "blue")
           count[2]++;
        if(chocolate[i] == "crimson")
           count[3]++;
        if(chocolate[i] == "purple")
           count[4]++;
        if(chocolate[i] == "red")
           count[5]++;
        if(chocolate[i] == "pink")
           count[6]++;
    }
    return count;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolate){
    
    let dict = {
        "green": 0,
        "silver": 0,
        "blue": 0,
        "crimson": 0,
        "purple": 0,
        "red": 0,
        "pink": 0,
    }
   
    for(let i=0; i<chocolate.length; i++){
        if(chocolate[i] == "green")
            dict["green"]++;
        if(chocolate[i] == "silver")
            dict["silver"]++;
        if(chocolate[i] == "blue")
            dict["blue"]++;
        if(chocolate[i] == "crimson")
            dict["crimson"]++;
        if(chocolate[i] == "purple")
            dict["purple"]++;
        if(chocolate[i] == "red")
            dict["red"]++;
        if(chocolate[i] == "pink")
            dict["pink"]++;
    }
         
    var items = Object.keys(dict).map(
        (key) => { return [key, dict[key]] });
      
    items.sort(
        (first, second) => { return second[1] - first[1] }
      );
      
    var keys = items.map(
        (e) => { return e[0] });
      
    return(keys);
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolate, count, currentColor, finalColor){
    for(let i=0; i<count; i++)
        if(chocolate[i] == currentColor)
           chocolate[i] = finalColor;
    return chocolate;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolate, currentColor, finalColor){
    let res = [];
    let count = 0;
    for(let i=0; i<chocolate.length; i++)
        if(chocolate[i] == currentColor){
            chocolate[i] = finalColor;
            count++;
        }
           
    res.push(count);
    res.push(chocolate);
    return res;
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolate, color){
    
    chocolate = chocolate.filter(item => item !== color);
    return chocolate;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolate, number){

    let dict = {
        "green": 0,
        "silver": 0,
        "blue": 0,
        "crimson": 0,
        "purple": 0,
        "red": 0,
        "pink": 0,
    }
   
    for(let i=0; i<chocolate.length; i++){
        if(chocolate[i] == "green")
            dict["green"]++;
        if(chocolate[i] == "silver")
            dict["silver"]++;
        if(chocolate[i] == "blue")
            dict["blue"]++;
        if(chocolate[i] == "crimson")
            dict["crimson"]++;
        if(chocolate[i] == "purple")
            dict["purple"]++;
        if(chocolate[i] == "red")
            dict["red"]++;
        if(chocolate[i] == "pink")
            dict["pink"]++;
    }
    
    let res = [];
    res.push(`green dispensed: ${~~(dict["green"]/number)}`);
    res.push(` silver dispensed: ${~~(dict["silver"]/number)}`);
    res.push(` blue dispensed: ${~~(dict["blue"]/number)}`);
    res.push(` crimson dispensed: ${~~(dict["crimson"]/number)}`);
    res.push(` purple dispensed: ${~~(dict["purple"]/number)}`);
    res.push(` red dispensed: ${~~(dict["red"]/number)}`);
    res.push(` pink dispensed: ${~~(dict["pink"]/number)}`);

    return res;
}