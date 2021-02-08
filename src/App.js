import React ,{ useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"a"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email:details.email
      });
    } else{
      console.log("Details don't Match!");
      setError("Details don't Match!");
    }
  }
  const Logout = details => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
        {(user.email !== "") ? (
          <form>
          <div className="welcome">
            <h2>Welcome  <span>{user.name}</span></h2>
            <button className="btn" onClick={Logout}>Logout</button>
          </div>
          </form>
        ) : (
              <LoginForm Login = {Login} error={error}/>
        )}
    </div>
  );
}

export default App;
