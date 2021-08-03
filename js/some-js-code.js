let btn = document.getElementById('btn');
let input = document.getElementById('it');
let ul = document.getElementById('list');
// btn.onclick = function(e) {
//    if(input.value === false){
//       return;
//    }
//    let li = document.createElement("li");
//    li.innerHTML = input.value;
//    ul.prepend(li);
// }

//сделать через listener:
btn.addEventListener('click',function(e) {
      if(input.value === false){
         return;
      }
      let li = document.createElement("li");
      li.innerHTML = input.value;
      ul.prepend(li);
   })