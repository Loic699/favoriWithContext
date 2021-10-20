import layout from './layout'
import UserContext from './UserContext'
import {useContext} from 'react'

export default function UserInfo(){
    const {userName} = useContext(UserContext)
    const {user} = useContext(UserContext)
    ///
    // const authenticationService = useContext(UserContext);
    // const {isOnline} = useContext(UserContext)
    // const handleLoginClick = () => authenticationService.loginUser('Manuel');
    // const handleLogoutClick = () => authenticationService.logoutUser();
    ///
   
      
    return(
        
        <div>
          
        <span style={{color:'red'}}>{userName}</span>
        </div>
    )
    // return(
    //     <>
    //     <button onClick={handleLoginClick}>login Manuel</button>
    //     <button onClick={handleLogoutClick}>logout Manuel</button>
    //     </>
    // )
}