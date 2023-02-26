// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const toggleBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

toggleBtn.addEventListener("click", function(){
 console.log(modal.classList);
//  if(sidebar.classList.contains("show-sidebar")){
//     sidebar.classList.remove('show-sidebar')
//  }else{
//     sidebar.classList.add('show-sidebar')
//  }
modal.classList.toggle('open-modal')
})
closeBtn.addEventListener('click', function(){

    modal.classList.remove("open-modal")
})