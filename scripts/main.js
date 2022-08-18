function setUserName() {
  const myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

let myO = {
  arr1 : [1,2,4],
  print : function() {
    setTimeout(() => console.log(this.arr1.join(' - ')), 3000);
  }
}
alert(myO.print());


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
