const tinygradient = require('tinygradient');
const tinycolor = require('tinycolor2');
const readline = require('readline');
let gradient = tinygradient([
    tinycolor("#56C596"),
    tinycolor("#42b9f5"),
]);
console.log("Commands: changecolor <color> || <string> to gradientize your input");

const interface = readline.createInterface(process.stdin, process.stdout);
interface.on('line', function(line){
    if(line.startsWith("changecolor")){
        let colors = line.split(" ");
        colors.shift();
        if(colors.length < 2){
            console.log("Colors length is smaller than 2");
            return;
        }
        gradient = tinygradient(colors.map(color => tinycolor(color)));
        console.log("Successfully.");
    }else{
        if(line.length < 2){
            console.log("String length is smaller than 2");
            return;
        }
        let colorized = [];
        const colorsHsv = gradient.hsv(line.length);
        for(i = 0; i < line.length; i++){
            let hex = colorsHsv[i].toHex();
            colorized.push("<color=#" + hex + ">" + line[i] + "</color>");
        }
        console.log("Result: " + colorized.join(""));
    }
});

console.log("<color=#")