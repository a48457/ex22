import Ex6 from "./Ex6"

const Birthday=(props)=>{
    
     return(
   <> 
        {props.age>18?<Ex6/>:""} 
        Happy Birthday ! {props.name} are {props.age} years old!
   </>  
    )
}
export default Birthday