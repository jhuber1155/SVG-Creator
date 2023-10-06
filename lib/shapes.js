const logo = require('.examples/logo.svg');

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
        return '<polygon points="150, 18 244, 182 56, 182" fill= setColor />' //????? how does setColor interact with fill?
}}
}

class Circle extends Shape{

}

class Square extends Shape{

}

module.exports = Shape;