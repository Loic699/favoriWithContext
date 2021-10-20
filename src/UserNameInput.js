import { useContext } from "react";
import UserContext from "./UserContext";

function UserNameInput(){
    const {userName, setUserName}=useContext(UserContext)
    const changeHandler = event => setUserName(event.target.value)
    return(
        <input
        type='text'
        value={userName}
        onChange={changeHandler}
        />
    )
}
export default UserNameInput