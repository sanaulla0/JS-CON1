
let student = document.getElementById('employee');
let element=document.getElementById('first');

let first = [
    {id:1,name:"John",profession:"developer", Age:"18" },
    {id:2, name:"Jack", profession:"developer",Age:"20"},
    {id:3, name:"Karen", profession:"Admin", Age:"19" }
];

let count='';
function selectdrop(){
  
    count=element.options[element.selectedIndex].value;
    console.log(count);
}

 first = first.map(function(item,index){
    return ({
        id:item.id,
        name:item.name,
       
        profession:item.profession,
        Age: parseInt(item.Age,10)
    })
})

first.forEach(item => {

    if(item.name =='john'){
        item.Age=19;
    }

})

let second = [
    {id:4,name:"joy",profession:"Admin" , Age:50,},
    {id:5, name:"ben", profession:"Admin", Age:81,},
    
    ]
const list=[...first,...second];

function final(item){
 student.innerHTML = item.reduce((htmlString, item) => {
     return htmlString + `
     <div class="out">
             <span> ${item.id}.  </span>
                
                 <span>  name: ${item.name} </span>
                 <span> profession: ${item.profession}</span>
                 <span> Age: ${item.Age}</span>
             
                 </div> `; }, "");
            
                }
                final(list);
             
            
             
             
        
    



 