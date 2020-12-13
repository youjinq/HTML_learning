
const App =(()=>{
//  console.log('Helo World')

 const greeting =()=>{
     console.log('hello guys')
 }

 const data =[
     { id: 1, name: 'John'},
     { id: 2, name: 'jACKSON'}

 ]
 return{
    greeting,
    data,
    value: data[0].id,
    values: function(){
        return  data[0].id;
    }
 }

})();


App.greeting();


const Print =(()=>{

    const { data,value, values} = App;


    data.forEach(item=> console.log(item))
    console.log(value, values())
    
})()