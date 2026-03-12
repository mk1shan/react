

function UserGreeding(props)
{
    

const welcomeMessage=   <h2 className="welcome-meassage">
                          welcome {props.username}</h2>


const loginPrompt= <h2 className="login-propmt">
                    plaease logggged in</h2>



return(props.isLoggedIn?  welcomeMessage:loginPrompt)
}


export default UserGreeding
