// const para = document.getElementById("pak");

// para.innerText = "pakistan zindabad";

// const pak1 = document.getElementsByClassName("pak1");
// pak1[0].style.backgroundColor="green";


// const paragraph = document.createElement('div');
// const text = document.createTextNode("chai hai ya nhi");
// paragraph.appendChild(text);

// paragraph.style.fontSize = "30px"; // Adjust font size to fit within the div
// paragraph.style.height = "150px"; // Increase height to accommodate larger text
// paragraph.style.width = "300px"; // Increase width to accommodate larger text
// paragraph.style.backgroundColor = "yellow";

// document.body.appendChild(paragraph);

// const lang=document.querySelector(".lang");
// const li=document.createElement('li');
// const textnode =document.createTextNode("pyhton");
// li.appendChild(textnode);
// lang.appendChild(li);

// const lastchild=document.querySelector(".lang :first-Child");
// lastchild.remove();

// // Assuming 'pic' is the reference to the image element
// const pic = document.querySelector('#myimage');
// pic.setAttribute('src', '/5d356367df2f4df7436b03ca0b467725.jpg');


// const class1=document.querySelector('.pak1');
// class1.setAttribute("class","main");
// // Select the button element
// const button = document.querySelector('#button');

// // Select the paragraph element
// const paragraph1 = document.querySelector('#paragraph');

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//   paragraph.textContent = "green and green pakistan";
// });


document.getElementById('pak1').addEventListener('mouseover', function() {
  this.style.borderColor = 'red';
  this.style.borderWidth = '2px';
  this.style.borderStyle = 'solid';
});

document.getElementById('pak1').addEventListener('mouseout', function() {
  this.style.borderColor = '';
  this.style.borderWidth = '';
  this.style.borderStyle = '';
})
