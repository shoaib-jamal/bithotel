let about_div = document.getElementById("about-button");
let about_page_bg = document.getElementById("about-page");

function createAboutPage() {
  if (mobile) {
    about_div.style.top = "auto";
    about_div.style.bottom = "0px";
    about_div.style.left = "16px";
  }
  let button = document.createElement("button");

  button.textContent = ">ABOUT";

  button.style.zIndex = "1";
  button.style.position = "absolute";
  button.style.font = "32px monogram";
  button.style.lineHeight = "1em";
  button.style.margin = "0px";
  button.style.display = "inline-block";
  button.style.border = "none";
  button.style.textAlign = "center";
  button.style.color = "#ff77a8";
  button.style.background = "none";
  button.style.outline = "none";
  button.style.right = "8px";
  button.style.top = "8px";
  button.style.cursor = "pointer";

  about_div.appendChild(button);

  button.onmouseenter = () => {
    button.style.color = "white";
  };

  button.onmouseleave = () => {
    button.style.color = "#ff77a8";
  };

  button.onclick = () => {
    hideDiv(about_page_bg, button);
    if (video_active === true) {
      player.stopVideo(); //stop the video if it is playing
      ifr.style.display = "none"; //hide the video player
      video_active = false;
    }
  };
}

function hideDiv(div, btn) {
  if (div.style.display !== "block") {
    div.style.display = "block";
    btn.value = ">BACK";
    btn.innerHTML = ">BACK";
  } else {
    div.style.display = "none";
    btn.value = ">ABOUT";
    btn.innerHTML = ">ABOUT";
  }
}
