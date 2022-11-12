let only = 0;
function ShowMenu() {
  let SidebarDiv = document.querySelector(".SidebarDiv");
  let MenuButtonImg = document.querySelector(".MenuButtonImg");
  let MenuButton = document.querySelector(".MenuButton");
  let MainContentsBox = document.querySelector(".MainContentsBox");
  let aTag = document.querySelectorAll(".aTag");
  if (only == 0) {
    only = 1;
    SidebarDiv.style.width = "10%";
    MainContentsBox.style.width = "90%";
    MenuButtonImg.style.transform = "rotateY(180deg)";
    MenuButton.style.backgroundColor = "#2b343b";
    MenuButton.style.left = "8.5%";
    MenuButtonImg.style.marginLeft = "10px";

    for (let i = 0; i < aTag.length; i++) {
      aTag[i].style.display = "block";
    }
  } else {
    only = 0;
    SidebarDiv.style.width = "0px";
    MainContentsBox.style.width = "100%";
    MenuButtonImg.style.transform = "rotateY(360deg)";
    MenuButton.style.backgroundColor = "#2b343b";
    MenuButton.style.left = "-25px";
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].style.display = "none";
    }
  }
}


let SlideCnt;

function MenuClickEvent(x) {
  let SidebarDiv = document.querySelector(".SidebarDiv");
  SidebarDiv.style.backgroundColor = "#4187f6";
  let a1 = document.querySelector("#aTag1");
  let a2 = document.querySelector("#aTag2");
  if (x == 0) {
    a1.classList.add("active");
    a2.classList.remove("active");
    addImgClicker(0)
    ShowSlide1(0, 0);
    SlideCnt = 0;
  } else {
    a2.classList.add("active");
    a1.classList.remove("active");
    addImgClicker(1)
    ShowSlide1(0, 1);
    SlideCnt = 0;
  }
}

function addImgClicker(x){
  let HomeOtherPage = document.querySelector(".HomeOtherPage")
  SlideCnt = 0;
  let nextButton = document.querySelector(".nextButton");
  let SlideTitleImg = document.querySelector(".SlideTitleImg");
  let ShowNum = document.querySelector(".ShowNum");
  ShowNum.style.display = "block";
  HomeOtherPage.style.display = "block";
  SlideTitleImg.style.display = "block";
  if(x==0){
    ShowNum.innerHTML = SlideCnt + 1 + " / " + Slide1FileName.length;
  }else{
    ShowNum.innerHTML = SlideCnt + 1 + " / " + Slide2FileName.length;
  
  }
  nextButton.addEventListener("click", ()=>{
    
    if(x == 0){
      console.log("1슬라이드")
      if(SlideCnt == Slide1FileName.length-1){
        alert("슬라이드가 끝났습니다.")
        window.location.reload();
      }else{
        SlideCnt++;
        ShowNum.innerHTML = SlideCnt + 1 + " / " + Slide1FileName.length;
        ShowSlide1(SlideCnt);
      }
    }else{
      console.log("2슬라이드", x)
      if(SlideCnt == Slide2FileName.length-1){
        alert("슬라이드가 끝났습니다.")
        window.location.reload();
      }else{
        SlideCnt++;
        ShowNum.innerHTML = SlideCnt + 1 + " / " + Slide2FileName.length;
        ShowSlide1(SlideCnt);
      }
    }
    
    
  })
}

let Slide1FileName = ["001.png", "002.png", "003.png", "004.png", "005.png"]
let Slide2FileName = ["001.png", "002.png", "003.png", "004.png", "005.png", "006.png"]


function ShowSlide1(ImgNumber, SlideNum){
  let SlideTitleImg = document.querySelector(".SlideTitleImg");
  if(SlideNum == 0){
    SlideTitleImg.setAttribute("src", "../Slide1Img/" + Slide1FileName[ImgNumber]);
  }else{
    SlideTitleImg.setAttribute("src", "../Slide2Img/" + Slide2FileName[ImgNumber]);
  }
  
  let a1 = document.querySelector("#aTag1");
  let a2 = document.querySelector("#aTag2");

}
