let allBtnNum = 0;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function genBtns()
{
  let sideMod = 0;
  for (let side = 0; side < 2; side++) {
    let y = 0, y2 = 0;
    let btnNum = 0;
    let plusLeft = 0;
    for (let line = 0; line < 5; line++) {   
      switch (line) {
        case 0:
          btnNum = 10;
          break;
        case 1:
          btnNum = 10;
          y2 = 3.8;
          y = 3.5;
          break;
        case 2:
          btnNum = 10;
          y2 = 7.6;
          y = 7;
          break;
        case 3:
          btnNum = 7;
          y = 10.5;
          break;
        case 4:
          btnNum = 3;
          y = 14;
          break;
        default:
          break;
      }
      for (let index = 0; index < btnNum; index++) {
        y++;
        const btn = document.createElement("img");
        btn.src = "SVGs/Rectangle.svg";
        btn.style.top = `${ 72 + y * 1.25}%`;
        let leftCalc = 0.5 + index * 3;
        switch (side) {
          case 1:
            leftCalc = sideMod - (3.5 + index * 3);
            btn.classList.add("panelBtnRight");
            break;
          default:
            break;
          }
          btn.style.left = `${leftCalc}%`;
          btn.classList.add("svg-layer");
          btn.classList.add("panelBtn");
          btn.id = `panelBtnId${allBtnNum}`;
        document.getElementsByClassName("down-left-btns")[0].appendChild(btn);
        allBtnNum++;
      }
  
      for (let normalLine = 0; normalLine < 3; normalLine++) {
        switch (line) {
          case 0:
            plusLeft = 1.2;
            break;
          case 1:
            plusLeft = 0.6;
            break;
          default:
            plusLeft = 0;
            break;
        }
        const btn2 = document.createElement("img");
        btn2.src = "SVGs/NormalBtnCenter.svg";
        btn2.style.top = `${86 + y2}%`;
        let leftCalc = (31 + plusLeft) + (normalLine * 3);
        switch (side) {
          case 1:
            leftCalc = sideMod - (39.5 + plusLeft) + (normalLine * 3);
            break;
          default:
            break;
        }
        btn2.style.left = `${leftCalc}%`;
        btn2.classList.add("svg-layer");
        btn2.classList.add("panelCenterBtn");
        btn2.id = `panelBtnId${allBtnNum}`;
        document.getElementsByClassName("down-left-btns")[0].appendChild(btn2);
        allBtnNum++;
      }
    }
    sideMod = 100;
  }
}

function LitRandom()
{
  let numOfBtns = getRandom(10, Math.round(allBtnNum / 3));
  let litOnes = [];
  for (let index = 0; index < numOfBtns; index++) {
    let indexNum = getRandom(0, allBtnNum);
    while(litOnes.includes(indexNum))
    {
      indexNum = getRandom(0, allBtnNum);
    }
    let id = `panelBtnId${indexNum}`;
    let chosen = document.getElementById(`${id}`);
    let colorStrg = "";
    let color = getRandom(0,1)
    switch (color) {
      case 0:
        colorStrg = "Red";
        break;
    
      default:
        colorStrg = "Green";
        break;
    }
    if (chosen.classList.contains("panelCenterBtn"))
    {
      chosen.src = `SVGs/NormalBtnCenter${colorStrg}.svg`;
    }
    else
    {
      chosen.src = `SVGs/Rectangle${colorStrg}.svg`;
    }
  }
}

genBtns();
LitRandom();