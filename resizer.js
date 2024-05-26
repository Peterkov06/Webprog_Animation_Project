
function genBtns()
{
  let y = 0;
  for (let index = 0; index < 13; index++) {
    if (index % 2 == 0)
      {
        y++;
      }
    const btn = document.createElement("img");
    btn.src = "SVGs/Rectangle.svg";
    btn.style.top = `${75 + y}%`;
    btn.style.left = `${1 + index * 3}%`;
    btn.classList.add("svg-layer");
    btn.classList.add("panelBtn");
    document.getElementsByClassName("down-left-btns")[0].appendChild(btn);
  }
  
}

genBtns();