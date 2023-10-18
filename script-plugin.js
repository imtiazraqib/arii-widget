// const widget = `<a
// id="arii"
// href="https://wecare.helloarii.com/e/midtowndemo"
// onclick="window.open(this.href, 'new', 'width=1280,height=720'); return false;"
// >
// <div class="arii-button">
//   <div class="flex-container">
//     <div class="wrapper">
//       <img src="./icons8-chat-94.png" alt="chat bubble" width="25px" />
//     </div>
//     <div class="wrapper">
//       <p>Guest Experience</p>
//     </div>
//   </div>
// </div>
// </a>`;

// document.body.innerHTML += widget;

const widget = `<div
id="arii">
<div class="arii-button">
  <div class="flex-container">
    <div class="wrapper">
      <img src="https://uploads-ssl.webflow.com/646e756c4526f6fa246bdca4/6525a4bfcbde82f3e02b3ed9_Midtownlogo_White-icon.png" alt="Midtown Logo" width="60px" />
    </div>
    <div class="wrapper">
      <p>Digital Guest</p>
      <p>Experience</p>
    </div>
  </div>
</div>
</div>`;

const iframeContainerDiv = `<div class="iframe-container hide">
<div class="top-bar">
  <img
    id="maximize"
    src="https://uploads-ssl.webflow.com/646e756c4526f6fa246bdca4/65303f4b0db5313db40e986e_icons8-maximize-50.png" />
  <img
    id="close"
    src="https://uploads-ssl.webflow.com/646e756c4526f6fa246bdca4/65303f4a4dc27cd6430b544c_icons8-close-50.png" />
</div>
<iframe
  src="https://wecare.helloarii.com/e/midtowndemo"
  width="100%"
  height="100%"
  frameborder="0"></iframe>
</div>`;

document.body.innerHTML += widget;
document.body.innerHTML += iframeContainerDiv;

const widgetBtn = document.getElementById("arii");
const iframeContainer = document.querySelector(".iframe-container");
const maximizeBtn = document.getElementById("maximize");
const closeBtn = document.getElementById("close");

widgetBtn.addEventListener("click", () => {
  iframeContainer.classList.remove("hide");
  setTimeout(() => {
    iframeContainer.classList.toggle("show-iframe");
  }, 300);
});

closeBtn.addEventListener("click", () => {
  iframeContainer.classList.toggle("show-iframe");
  setTimeout(() => {
    iframeContainer.classList.add("hide");
    iframeContainer.classList.toggle("maximize-iframe");
  }, 100);
});

maximizeBtn.addEventListener("click", () => {
  iframeContainer.classList.toggle("maximize-iframe");
});
