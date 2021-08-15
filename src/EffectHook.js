import react,{useEffect,useState} from "react";
// handles sideEffects and alo manages lifecycle 


const EffectHook =() => {
     const [userData,setUserData] =useState()
    const getTheServerData =async () =>{
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data =  await result.json()
        setUserData(data);

     }   
  useEffect(() => {
         console.log("Component Mounted");
         console.log("Component rerendered");
        getTheServerData();
    },[])
    return (
    <div>
        <h3>EFFECT HOOK</h3> 
        {userData && userData.map((user)=><p key={user.id}>{user.name}</p>)}
    </div>)
};

export default EffectHook;