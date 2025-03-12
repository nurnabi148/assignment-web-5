// ----------------color change button-----------

const body=document.querySelector('body');
const change=document.getElementById('colorChange');

const colors = ['rgb(192,192,192)', 'rgb(0,192,192)', 'rgb(196,181,253)', 'rgb(0,155,111)',  'rgb(150,150,1)'];

 body.style.backgroundColor=colors;

 change.addEventListener('click',function()
{
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})



//----------------next page-------------------------

const nextPage=document.getElementById('next-page').addEventListener('click',function(event)
{
   event.preventDefault();
   window.location.href="./index1.html";
})

//----------------Alert buttons----------------------------

const alertButton=document.querySelectorAll('.alert-btn');
const less=document.getElementById('decrement');
const more=document.getElementById('increment');
const clear=document.getElementById('show');
const finish=document.getElementById('remove');
const kaka=document.getElementById('history-item');


for(let i=0;i<alertButton.length;i++)
{
    alertButton[i].countClick = 0;
    alertButton[i].addEventListener('click',function()

{   
    alertButton[i].countClick++;
    if(alertButton[i].countClick === 5)
    {
        alert("last alert")
        
    }
        
    else
    {
         
    alert("Board update successfully")
    alertButton[i].disabled=true; 
    }
    

    const hhNew=new Date();
    const kkUpdate=hhNew.toLocaleTimeString();

    const notonTime = document.createElement("p");
   
    notonTime.textContent = `You have completed the task. Add Dark Mode at ${kkUpdate} PM`;
    

   
    clear.appendChild(notonTime);
    kaka.appendChild(notonTime);
     
    // const historyText=`
    // You have completed the task Add Dark Mode at 12:48:15 PM
   
    // `
    // const historyItem=document.createElement('p');
    // historyItem.textContent=historyText;
    // clear.appendChild(historyItem);
    // kaka.appendChild(historyItem);

    clear.style.display='block';

 //---------------------history clear------------
    document.getElementById('remove').addEventListener('click',function(event)
    {
        event.preventDefault();
        kaka.innerHTML='';
        
    })

    // ------decrement TAsk Assign--------
    let lessNumber=parseInt(less.innerText);
    let updateLessNumber=lessNumber-1;
    less.innerText=updateLessNumber;
    
    //-------increment-----------------

    let moreNumber=parseInt(more.innerText);
    let updateMoreNumber=moreNumber+1;
    more.innerText=updateMoreNumber;


   
    
    
    


})




}

const currentDate=document.getElementById('time-date');

const myNewDate= new Date();

const updateDate=myNewDate.toDateString();

if(currentDate)
{
    currentDate.textContent=updateDate;
}

// document.querySelectorAll('#button1');

    
// //     for (let i = 0; i <alertButton.length; i++)
// //     {
// //         alertButton[i].addEventListener('click',function(event)
// //     {
// //         event.preventDefault();
// //         const hh=new Date();
// // const kk=hh.toLocaleTimeString();
// // const notonTime=document.createElement('p');
// //   notonTime.textContent=`You have completed the task. Add Dark Mode at ${kk} PM`;
// //   kaka.appendChild(notonTime);
// //     })
        
// }  





