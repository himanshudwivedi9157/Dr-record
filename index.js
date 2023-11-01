// // fill in javascript code here
// document.querySelector("form").addEventListener("submit",myfun);
// function myfun(event){
//     event.preventDefault();
//     let a =document.querySelector("#name").value;
//     let b= document.querySelector("#email").value;
//    let c= document.querySelector("#docID").value;
//    let d= document.querySelector("#dept").value;
//    let e= document.querySelector("#exp").value;
//    let f= document.querySelector("#mbl").value;
//    displaytable(a,b,c,d,e,f)
// console.log(a,b,c,d,e,f);
// }
// function displaytable (a,b,c,d,e,f){
//     let row=document.createElement("tr");
//     let g=document.createElement("td");
//     g.innerText=a;
//     let h=document.createElement("td");
//     h.innerText=b;
//     let i=document.createElement("td");
//     i.innerText=c;
//     let j=document.createElement("td");
//     j.innerText=d;
//     let k=document.createElement("td");
//     k.innerText=e;
//     let l=document.createElement("td");
//     l.innerText=f;
//     let m=document.createElement("td");
//     m.innerText="";
//     let n=document.createElement("td");
//     n.innerText="Delete";
//     row.append(g,h,i,j,k,l);
//     document.querySelector("tbody").append(row);
   

// }

// document.querySelector("form").addEventListener("submit", myfun);

// function myfun(event) {
//   event.preventDefault();
//   let a = document.querySelector("#name").value;
//   let b = document.querySelector("#docID ").value;
//   let c = document.querySelector("#dept").value;
//   let d = document.querySelector("#exp").value;
//   let e = document.querySelector("#email").value;
//   let f = document.querySelector("#mbl").value;
//   displaytable(a, b, c, d, e, f);
// }

// function displaytable(a, b, c, d, e, f) {
//   let row = document.createElement("tr");
//   let g = document.createElement("td");
//   g.innerText = a;
//   let h = document.createElement("td");
//   h.innerText = b;
//   let i = document.createElement("td");
//   i.innerText = c;
//   let j = document.createElement("td");
//   j.innerText = d;
//   let k = document.createElement("td");
//   k.innerText = e;
//   let l = document.createElement("td");
//   l.innerText = f;
//   let m = document.createElement("td");
//   m.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
//   row.append(g, h, i, j, k, l, m ,n );
//   document.querySelector("tbody").append(row);
// }

// function deleteRow(button) {
//   // Find the parent row and remove it when the delete button is clicked
//   button.parentElement.parentElement.remove();
// }


document.querySelector("form").addEventListener("submit", myfun);

function myfun(event) {
  event.preventDefault();
  let a = document.querySelector("#name").value;
  let b = document.querySelector("#docID").value;
  let c = document.querySelector("#dept").value;
  let d = document.querySelector("#exp").value;
  let e = document.querySelector("#email").value;
  let f = document.querySelector("#mbl").value;
  displaytable(a, b, c, d, e, f);
}

function displaytable(a, b, c, d, e, f) {
  let row = document.createElement("tr");
  let g = document.createElement("td");
  g.innerText = a;
  let h = document.createElement("td");
  h.innerText = b;
  let i = document.createElement("td");
  i.innerText = c;
  let j = document.createElement("td");
  j.innerText = d;
  let k = document.createElement("td");
  k.innerText = e;
  let l = document.createElement("td");
  l.innerText = f;
  let m = document.createElement("td");
  m.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  row.append(g, h, i, j, k, l, m);
  document.querySelector("tbody").append(row);
}

function deleteRow(button) {
  // Find the parent row and remove it when the delete button is clicked
  button.parentElement.parentElement.remove();
  

}
