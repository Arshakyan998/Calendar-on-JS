const body=document.querySelector('body')
let mounthSpan=body.querySelector('.getMounth')
let timeSpan=body.querySelector('.timeSpan')
let getDey=body.querySelector('.getDey')

let dataMount=new Date().getMonth()

let getThisDateInMount=new Date().getDate()



let mounths=[
        "Январь", 
"Февраль" ,
"Март" ,
"Апрель" ,
"Май" ,
"Июнь" ,
"Июль" ,
"Август" ,
"Октябрь" ,
"Ноябрь" ,
"Декабрь" ,
]

let days=[
       "Воскресенье",
 "Понедельник",
 "Вторник",
 "Среда",
 "Четверг",
 "Пятница",
 "Суббота"
]

getDey.innerHTML=days[new Date().getDay()]


for(let i=0;i<mounths.length;i++){


       if(dataMount===i){
        mounthSpan.innerHTML=mounths[i] 
       }
        
}


let table=document.querySelector(".calendar tbody")
   let tr=document.createElement('tr')
for(let i=1; i<=31;i++){
     
        
        let tD=document.createElement('td')
        
      if(getThisDateInMount===i){
        tD.classList.add('active') 
      }

  
  

tD.textContent=i
        tr.appendChild(tD)
        table.appendChild(tr)
        

}

function timeNow(){
let date=new Date()
let result=date.toString().split(" ").splice(4,1).join()
timeSpan.innerText=result

}


timeNow()
setInterval(()=>{
        timeNow()
},1000 )



