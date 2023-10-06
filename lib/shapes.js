const logo = require('.examples/logo.svg'); //??


class shapes{
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


class triangle extends shapes{
    constructor(x, y, text, textColor, chosenShape, setColor){
    super(x, y, text, textColor, setColor);
    this.chosenshape = `${chosenShape}` //?? or Triangle?

    this.render(logo) = function () {
        if(chosenShape === "Triangle"){
        return (`<polygon points="150, 18 244, 182 56, 182" fill= ${setColor} />
        text text-anchor="middle" x="135" y="125"<tspan fill = ${textColor}>${letter}</tspan></text>}`)
        
}}
}
}

class circle extends shapes{
    constructor(x, y, text, textColor, chosenShape, setColor){
        super(x, y, text, textColor, setColor);
        this.chosenshape = `${chosenShape}` 
    
        this.render(logo) = function () {
            if(chosenShape === "Circle"){
            return (`<circle cx="150" cy="100" r="80" fill= ${setColor}/>
            text text-anchor="middle" x="85" y="105" <tspan fill = ${textColor}>${letter}</tspan></text>`)
        } 
            }}
}

class square extends shapes{
    constructor(x, y, text, textColor, chosenShape, setColor){
        super(x, y, text, textColor, setColor);
        this.chosenshape = `${chosenShape}` 
    
        this.render(logo) = function () {
            if(chosenShape === "Square"){
            return (`<rect x="90" y="40" width="120" height="120" fill= ${setColor}/>'text text-anchor="middle" x="85" y="100" <tspan fill = ${textColor}>${letter}</tspan></text>`)
        }
            }}
}

module.exports = shapes;