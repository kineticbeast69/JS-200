const container = document.getElementsByClassName("container")[0];

window.addEventListener("keydown",(event)=>{
     let keyName = event.key;
     let keyCode = event.keyCode
     let key = event.code 
container.innerHTML = `<div class="key">
<p class="para">Key name</p>
<div id="key">
  ${keyName}
</div>
</div>
<div class="key-code">
<p class="para">Key code</p>
<div id="key">
  ${keyCode}
</div>
</div>
<div class="code">
<p class="para">Key</p>
<div id="key">
  ${key}
</div>
</div>`;
})
