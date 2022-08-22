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
document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerField=getInputValueById('perPlayer-field');
    const totalPlayerCost=perPlayerField * 5;
    setTextValyeById('playerExpenses-total',totalPlayerCost);
})

document.getElementById('calculate-total').addEventListener('click',function(){
    const totalPlayerCost=getElementValueById('playerExpenses-total');
    const managerTotalCost=getInputValueById('manager-field');
    const coachTotalCost=getInputValueById('coach-field');
    

    const totalCostCalculate = totalPlayerCost + managerTotalCost + coachTotalCost;
    setTextValyeById('total-cost',totalCostCalculate)
})