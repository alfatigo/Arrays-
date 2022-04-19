const persons = [
  {
    name: "Juan",
    lastName: "Almonte",
    age: 22    
  },
   {
    name: "Alex",
    lastName: "Rodriguez",
    age: 11   
  },
   {
    name: "Pedro",
    lastName: "Bonifacio",
    age: 44    
  },
   {
    name: "Ana",
    lastName: "Estrella",
    age: ''
  },
  
]


//forEach

// for(i = 0; i < person.length; i++){
//   console.table(person[i]);
// }

// persons.forEach((person, index, persons) =>{
   // console.log(index)
   // console.table(person)
//   console.log(persons[index])
// })

//Map
// const Name = persons.map(person=>({...person,height: person.age*3}))
// console.log(Name)

//Filter

// const res = persons.filter((person)=>{
//   if(person.age != "" ){
//     console.log(`Person know his age: ${person.age}`)
//   }
//   else{
//     console.log(`${person.name} doesnt know his age`)
//   }
// })

// const res = persons.filter(person => person.age < 22 ) 
// console.log(res)
//Reduce
// const totalAge = persons.reduce((total, person)=> total+ person.age,0); 
// console.log(totalAge);

const perosnSort = persons.sort((a,b) => a.name < b.name ? 1 : -1);
console.log(perosnSort);