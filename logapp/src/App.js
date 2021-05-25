import {useState} from 'react'
import Header from './components/header'
import Login from './components/login'
import {AuthContext} from './lib/auth'


const App= ()=> {
  const [auth, setAuth] = useState()

  return (
    <>
     <AuthContext.Provider value={{auth, setAuth}}>
           
          <Header/>
         {!auth && <Login />}
       


</AuthContext.Provider>
    </>
  );
}

export default App;
