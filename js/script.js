
const buttonSelect=document.getElementsByClassName('button');
let count =0;

for(let i =0; i< buttonSelect.length;i++){
 const element=buttonSelect[i];
 
 element.addEventListener('click',function(event){
    

    if(count >= 5 ){
        alert('5 er beshi noy')
        return;
    }
    else{
        count++
       
        const unOrdedList=document.getElementById('unOrded-list');
        const li=document.createElement('li');
        li.innerText=event.target.parentNode.parentNode.children[0].innerText;
        unOrdedList.appendChild(li);
          this.disabled=true;
          return ;
    }
   
   
 })
}

// 

document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerField=getInputValueById('perPlayer-field');
    if(isNaN(perPlayerField)){
        alert('Please provide a number');
        return NaN;
    }
    else if(perPlayerField < 0 ==true){
        alert('please provide a positive number')
        return false;
    }
    
        const totalPlayerCost=perPlayerField * count;
        console.log(totalPlayerCost);
        setTextValyeById('playerExpenses-total',totalPlayerCost);
    
    
    
    
})
// 
document.getElementById('calculate-total').addEventListener('click',function(){
    const totalPlayerCost=getElementValueById('playerExpenses-total');

    const managerTotalCost=getInputValueById('manager-field');
    const coachTotalCost=getInputValueById('coach-field');
    if(isNaN(managerTotalCost) || isNaN(coachTotalCost)){
        alert('Please Provide a Number')
        return NaN;
    }else if(managerTotalCost < 0 ==true || coachTotalCost < 0 ==true){
        alert('Please provide a positive number');
        return false;
    }

    const totalCostCalculate = totalPlayerCost + managerTotalCost + coachTotalCost;
    setTextValyeById('total-cost',totalCostCalculate)
})

// 
