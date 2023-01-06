import './App.css';
import { NavBar } from './Components/NavBar';
import { Products } from './Components/Products';
import './index.css'


export const App = ({name, message}) => {
  return (
    <>
      <NavBar/>
      <div className="App">
         <h1><span>{message}</span>  <span>{name}</span> </h1> 
         <Products/>
      </div>
    </>
  );
}
