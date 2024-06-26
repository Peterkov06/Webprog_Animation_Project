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

let litOnes = [];
function LitRandom()
{
  let plannedOnes = [];
  let numOfBtns = getRandom(10, Math.round(allBtnNum / 2));
  for (let index = 0; index < numOfBtns; index++) {
    let indexNum = getRandom(0, allBtnNum - 1);
    while(plannedOnes.includes(indexNum))
    {
      indexNum = getRandom(0, allBtnNum - 1);
    }
    plannedOnes.push(indexNum);
  }
  for (let toCahnge = 0; toCahnge < plannedOnes.length; toCahnge++) {
    let currInd = plannedOnes[toCahnge];
    if(litOnes.includes(currInd))
    {
      let id = `panelBtnId${currInd}`;
      let chosen = document.getElementById(`${id}`);
      if (chosen.classList.contains("panelCenterBtn"))
      {
        chosen.src = `SVGs/NormalBtnCenter.svg`;
      }
      else
      {
        chosen.src = `SVGs/Rectangle.svg`;
      }
        litOnes = litOnes.filter(function (element) {return element !== currInd})
    }
    else
    {
      litOnes.push(currInd);
      let id = `panelBtnId${currInd}`;
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

}

function PullLever()
{
  let lever = document.getElementsByClassName("lever")[0];
  if (lever.classList.contains("pullLever"))
  {
    lever.classList.add("pullLeverBack");
    GetNewPlanet();
    lever.classList.remove("pullLever");
  }
  else
  {
    lever.classList.remove("pullLeverBack");
    lever.classList.add("pullLever");
    setTimeout(Fire, 1000)
  }
}

function Fire()
{
  document.getElementsByClassName("laser")[0].classList.add("fireOrder");
  setTimeout(function () {document.getElementsByClassName("explosionIMG")[0].classList.add("explode"); document.getElementsByClassName("planetIMG")[0].classList.add("explodePlanet");}, 1420);
  setTimeout(function () {document.getElementsByClassName("laser")[0].classList.remove("fireOrder");}, 1500)
  setTimeout(function () {document.getElementsByClassName("explosionIMG")[0].classList.remove("explode");}, 1950);
}

function GetNewPlanet()
{
  let ind = getRandom(1,4);
  document.getElementsByClassName("planetIMG")[0].src = `SVGs/Planets/planet (${ind}).svg`
  document.getElementsByClassName("planetIMG")[0].classList.remove("explodePlanet");
}

document.getElementsByClassName("lever")[0].addEventListener("click", PullLever)

genBtns();
GetNewPlanet();
LitRandom();
setInterval(LitRandom, 1300);