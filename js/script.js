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
// 


// 

const buttonSelect=document.getElementsByClassName('button');
let count =0;

for(let i =0; i< buttonSelect.length;i++){
 const element=buttonSelect[i];
 
 element.addEventListener('click',function(event){
    count++
    if(count > 5){
        alert('5jon er beshi add deoya jabe nah')
        return;
    }
   const unOrdedList=document.getElementById('unOrded-list');
   const li=document.createElement('li');
   li.innerText=event.target.parentNode.parentNode.children[0].innerText;
   unOrdedList.appendChild(li);
     this.disabled=true;
   
 })
}

// 

document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerField=getInputValueById('perPlayer-field');
    const totalPlayerCost=perPlayerField * count;
    setTextValyeById('playerExpenses-total',totalPlayerCost);
})

document.getElementById('calculate-total').addEventListener('click',function(){
    const totalPlayerCost=getElementValueById('playerExpenses-total');
    const managerTotalCost=getInputValueById('manager-field');
    const coachTotalCost=getInputValueById('coach-field');
    

    const totalCostCalculate = totalPlayerCost + managerTotalCost + coachTotalCost;
    setTextValyeById('total-cost',totalCostCalculate)
})

// 
