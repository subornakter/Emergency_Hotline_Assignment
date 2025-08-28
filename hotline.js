//functionalities

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
 const heartBtns = document.getElementsByClassName("heart-btn");
 for (let cardButton of heartBtns) {
   cardButton.addEventListener("click", function () {
     const heartCount = getElement("heart-count");
      heartCount.innerText = parseInt(heartCount.innerText) + 1;
   });
 }

 const callBtns = document.getElementsByClassName("call-btn");
  for (let callButton of callBtns) {
    callButton.addEventListener("click", function () {
        let coinElement = getElement("coin-count");
    let coinCount = parseInt(coinElement.innerText);
    if (coinCount < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }
    coinCount -= 20;
    coinElement.innerText = coinCount;
     const serviceName=callButton.parentNode.parentNode.children[1].children[0].innerText;
    //  console.log(serviceNumber);
    const serviceNumber=callButton.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(serviceNumber);
      alert(`Calling ${serviceName} (${serviceNumber})...`);
      const historyContainer=getElement("History-container");
      const historyDiv=document.createElement("div");
      historyDiv.innerHTML=`
      <div
              class="flex justify-between items-center bg-gray-100 rounded-[15px] p-2 mt-3"
            >
              <div>
                <h1 class="font-bold text-sm">${serviceName}</h1>
                <p class="text-gray-500 ">${serviceNumber}</p>
              </div>
              <p>${new Date().toLocaleTimeString()}</p>
            </div>
      `
      historyContainer.appendChild(historyDiv);

   
    });
  }
  document.getElementById("btn-clear").addEventListener("click", function () {
  const historyContainer = getElement("History-container");
  historyContainer.innerHTML = "";
  getElement("heart-count").innerText = 0;
  getElement("coin-count").innerText = 100;
});
//challenge part
  const copyBtns = document.getElementsByClassName("copy-btn");
 for (let copyButton of copyBtns) {
   copyButton.addEventListener("click", function () {
     const copyCount = getElement("copy-count");
      copyCount.innerText = parseInt(copyCount.innerText) + 1;
   });
 }

 // Challenge Part
const copyBtnsPaste = document.getElementsByClassName("copy-btn");
for (let copyButton of copyBtnsPaste) {
  copyButton.addEventListener("click", function () {
    const serviceNumber = copyButton.parentNode.parentNode.children[1].children[2].innerText;
    navigator.clipboard.writeText(serviceNumber)
      .then(() => {
        alert(`Copied: ${serviceNumber}`); 
      })
      .catch(err => {
        alert("Failed to copy: " + err);
      });
  });
}



