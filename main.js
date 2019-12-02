var closeBox = document.querySelector("#XB");
var closeThis = document.querySelector("#RmvBanner");

closeBox.addEventListener('click', exitBanner);

function exitBanner() {
  closeThis.parentNode.removeChild(closeThis);
}

var walletIcon = document.querySelector("#icon2");
var clipboardIcon = document.querySelector("#icon1");
var dashboardPage = document.querySelector(".clipboard");
var transactionPage = document.querySelector(".transaction-page");

walletIcon.addEventListener('click', changeToTransactions);
clipboardIcon.addEventListener('click', changeToDashboard);

function changeToTransactions () {
  clipboardIcon.classList.remove('turq-highlight');
  walletIcon.classList.add('turq-highlight');
  dashboardPage.classList.add('hideMe');
  transactionPage.classList.remove('hideMe');
}

function changeToDashboard () {
  clipboardIcon.classList.add('turq-highlight');
  walletIcon.classList.remove('turq-highlight');
  dashboardPage.classList.remove('hideMe');
  transactionPage.classList.add('hideMe');
}
