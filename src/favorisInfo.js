import React, {useContext} from "react";
import UserContext from "./UserContext";

export default function FavorisInfo (){
 const favContext = useContext(UserContext)

 return (
     <div>
        <ul>
            {favContext.favoris.map(favoris => <li key={favoris}> {favoris} <button > delete to fav</button></li> 
            )} 
             
            </ul>
     </div>
 )
}