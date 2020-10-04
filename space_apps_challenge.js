// NASA Space Apps Challenge
// Team Alpha 
// Breakthrough Challenge 
// Sanjit Vijay, Soham Salunke, Anish Shanbhag, Rohan Kolli, Rushil Kagithala
// https://studio.code.org/projects/applab/GjQdBVFDrnKwZao3DFZ0kKqlhTlmSLKTGQaRWXslONU
// ^^ Use link to open app ^^


onEvent("startButton","click", function(){
    setScreen("IntroScreen");
});
  
onEvent("nextButton", "click",function(){
    setScreen("mainScreen");
});
  
var screens = ["solarsails","warpdrive","boosters","electrothermal","plasma","antimatter"];
  
function changeScreen(screen){
    onEvent(screen + "Button","click", function(){
      setScreen(screen + "Screen");
    });
}
  
function hoverToShow(screen,imageID, textID){
    onEvent(screen,"mousemove", function(event){
      if((event.x > getXPosition(imageID)&&(event.x < getXPosition(imageID)+getProperty(imageID, "width"))&&(event.y > getYPosition(imageID)&&(event.y < getYPosition(imageID)+getProperty(imageID, "height"))))){
        showElement(textID);
      }
      else{
        hideElement(textID);
      }
    });
}
  
function hoverForLink(screen, number){
    for(var i = 0; i < number; i++){
      hoverToShow(screen + "Screen", screen + "Image" + i, screen + "URL" + i);
    }
}
function learnMoreChangeScreen(screen){
    onEvent(screen+"LearnMoreButton","click",function(){
      setScreen(screen+"LearnMoreScreen");
    });
}
  
function learnMoreReturnToMain(screen){
    onEvent(screen + "LearnMoreReturnButton", "click", function(){
      setScreen("mainScreen");
    });
}
  
function returnToMain(buttonId){
    onEvent(buttonId, "click",function(){
      setScreen("mainScreen");
    });
}
  
for(var i = 0; i<screens.length; i++){
    changeScreen(screens[i]);
    returnToMain("return" + i);
    learnMoreChangeScreen(screens[i]);
    learnMoreReturnToMain(screens[i]);
}
  
hoverForLink("solarsails", 2);
hoverForLink("warpdrive", 1);
hoverForLink("boosters", 2);
hoverForLink("electrothermal", 2);
hoverForLink("plasma",2);
hoverForLink("antimatter",2);