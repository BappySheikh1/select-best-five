// const playerArray=[];
// function display(Players){
// for(let i= 0; i < playerArray.length ; i++){
//     console.log(playerArray[i].playerName)
//     // const name =playerArray[i].playerName
// }
// }

// function addToPlayer(element){
//     // console.log(element.parentNode.parentNode.children[0].innerText)
    
    
//     const playerName=element.parentNode.parentNode.children[0].innerText;
//     playerArray.push(playerName)
//     // console.log(playerArray.length);
//     const unOrderList=getElementValueById('unOrded-list').innerText=playerArray.length;
//     display(playerArray);
// }

// const items=document.getElementsByClassName('btn-items');
// for(const item of items){
//     const olListContainer=document.getElementById('unOrded-list');
     
// }
document.getElementById('select').addEventListener('click',function(event){
    const unOrdedList=document.getElementById('unOrded-list');
    const li=document.createElement('li');
    li.innerText=event.target.parentNode.parentNode.children[0].innerText;
    unOrdedList.appendChild(li);
    
    
})
document.getElementById('select-2').addEventListener('click',function(event){
    const unOrdedList=document.getElementById('unOrded-list');
    const li=document.createElement('li');
    li.innerText=event.target.parentNode.parentNode.children[0].innerText;
    unOrdedList.appendChild(li);
    
    
})
document.getElementById('select-3').addEventListener('click',function(event){
    const unOrdedList=document.getElementById('unOrded-list');
    const li=document.createElement('li');
    li.innerText=event.target.parentNode.parentNode.children[0].innerText;
    unOrdedList.appendChild(li);
    
    
})
document.getElementById('select-4').addEventListener('click',function(event){
    const unOrdedList=document.getElementById('unOrded-list');
    const li=document.createElement('li');
    li.innerText=event.target.parentNode.parentNode.children[0].innerText;
    unOrdedList.appendChild(li);
    
    
})

document.getElementById('select-5').addEventListener('click',function(event){
    const unOrdedList=document.getElementById('unOrded-list');
    const li=document.createElement('li');
    li.innerText=event.target.parentNode.parentNode.children[0].innerText;
    unOrdedList.appendChild(li);
    
    
})
document.getElementById('select-6').addEventListener('click',function(event){
    const unOrdedList=document.getElementById('unOrded-list');
    const li=document.createElement('li');
    li.innerText=event.target.parentNode.parentNode.children[0].innerText;
    unOrdedList.appendChild(li);
    
    
})
