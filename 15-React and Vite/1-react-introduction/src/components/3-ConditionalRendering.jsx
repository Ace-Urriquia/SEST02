/*
    Conditional Rendering
    control on what gets rendered in our application.
*/

function UsersList(){
    // ternary operator
    // condition ? true : false
    // if (condition) {} else {}
    const isLoggedIn = true;
    const username = "John Doe";
    const loggedInElement = <em>{username}</em>;

    const usernameList = ["David","Michael","Lili"];
    
    return (
        <>
            <h1>Welcome {isLoggedIn ? loggedInElement : "Guest"}!</h1>
            <ul>
                {usernameList.map((user) =>(
                    <li>{user}</li>
                ))}
            </ul>

            
           
        </>
    )
}
export default UsersList;
