// OOP
class Cookie {
  // Constructor Key word
  // Member Variables
  constructor(color) {
    this.color = color;
  }
  // Getter method
  getColor() {
    return this.color;
  }
  // Setter Method
  setColor(color) {
    return (this.color = color);
  }
}

let cookieOne = new Cookie("red"); // Red Cookie
let cookieTwo = new Cookie("Blue"); // Blue Cookie

console.log(cookieOne.getColor());
console.log(cookieOne.setColor("Red"));
console.log(cookieOne.getColor());
