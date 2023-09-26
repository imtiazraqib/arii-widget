const widget = `<a
id="arii"
href="https://wecare.helloarii.com/e/midtowndemo"
onclick="window.open(this.href, 'new', 'width=1280,height=720'); return false;"
>
<div class="arii-button">
  <div class="flex-container">
    <div class="wrapper">
      <img src="./icons8-chat-94.png" alt="chat bubble" width="25px" />
    </div>
    <div class="wrapper">
      <p>Guest Experience</p>
    </div>
  </div>
</div>
</a>`;

document.body.innerHTML += widget;
