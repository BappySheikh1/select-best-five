
function getInputValueById(inputValue){
    const inputField=document.getElementById(inputValue);
    const inputValueString=inputField.value;
    const value=parseInt(inputValueString);
   
    return value;
   }
   function getElementValueById(elementId){
       const textElement=document.getElementById(elementId);
       const elementString=textElement.innerText;
       const element=parseInt(elementString);
   
       return element
   }
   function setTextValyeById(elementId,value){
       const element=document.getElementById(elementId);
       element.innerText=value;
   }
