
function sendConfirm(){
  document.getElementById("confirmation-message").style.display = "block";
  // document.getElementById("client-name").value = "";
  // document.getElementById("client-email").value = "";
  // document.getElementById("client-message").value = "";
$('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
  $(".trigger").toggleClass("drawn");
}
