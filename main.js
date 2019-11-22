var closeBox = document.querySelector("#XB");
var closeThis = document.querySelector("#RmvBanner");
closeBox.addEventListener('click', exitBanner);
function exitBanner() {
  closeThis.parentNode.removeChild(closeThis);
}
