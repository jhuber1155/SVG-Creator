const logo = require('.examples/logo.svg'); //??


//MotionTricks Website insight
{/* <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg> */}  //????

// let newSquare = document.createElementNS("http://www.w3.org/2000/svg", "square"); //???
// const svgns = "http://www.w3.org/2000/svg"; //???
// let newSquare = document.createElementNS(svgns, "square"); //???

class Shape{
    constructor(x, y, text, textColor, setColor){
        this.x = 300;
        this.y = 200;
        this.text = `${letter}`;
        this.textColor = `${letterColor}`;
        this.setColor = `${shapeColor}`;

    if(text.length > 3){
        throw new Error('Please choose 3 letters or less');
    }
    const pattern = new RegExp('([A-Za-z)');
    if (!pattern.test(text)) {
        throw new Error('Please choose 3 Letters without numbers or symbols');
    }}
} 


class Triangle extends Shape{
    constructor(x, y, text, textColor, chosenShape, setColor){
    super(x, y, text, textColor, setColor);
    this.chosenshape = `${chosenShape}` //?? or Triangle?

    this.render(logo) = function () {
        if(chosenShape === "Triangle"){
        return '<polygon points="150, 18 244, 182 56, 182" fill= ${setColor} />'
        text text-anchor="middle" x="135" y="125"<tspan fill = ${textColor}>${letter}</tspan></text>> ///????
    } //????? how does setColor interact with fill?
}}
}

class Circle extends Shape{
    constructor(x, y, text, textColor, chosenShape, setColor){
        super(x, y, text, textColor, setColor);
        this.chosenshape = `${chosenShape}` 
    
        this.render(logo) = function () {
            if(chosenShape === "Circle"){
            return '<circle cx="100" cy="100" r="95" fill= ${setColor}/>'
            text text-anchor="middle" x="85" y="105" <tspan fill = ${textColor}>${letter}</tspan></text>} //?? MDN Docs
            }}
}

class Square extends Shape{
    constructor(x, y, text, textColor, chosenShape, setColor){
        super(x, y, text, textColor, setColor);
        this.chosenshape = `${chosenShape}` 
    
        this.render(logo) = function () {
            if(chosenShape === "Square"){
            return '<rect width="200" height="200" fill= ${setColor}/>'
            text text-anchor="middle" x="85" y="100" <tspan fill = ${textColor}>${letter}</tspan></text>} //?? MDN Docs
            }}
}

module.exports = Shape;