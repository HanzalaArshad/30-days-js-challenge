const button=document.querySelector("#button");
const paragraph=document.querySelector("#para");


button.addEventListener('click',()=>{
  paragraph.textContent="pakistan zindabad"
})

const myimg=document.querySelector("#myimg");


const image = document.getElementById('myimg');
const button2=document.querySelector("#button2");


// Add a double-click event listener
button2.addEventListener('dblclick', () => {
    // Toggle the visibility of the image
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});


const paragraph2=document.querySelector(".box1");
paragraph2.addEventListener('mouseover',()=>{
  paragraph2.style.borderColor="red"
});


paragraph2.addEventListener('mouseout',()=>{
  paragraph2.style.borderColor="green"
});


