import "./style/styles.css"
import Counter from "./components/Counter";
import InputVal from "./components/InputVal";
import ToggleBtn from "./components/ToggleBtn";


function App(){
    
    
    return (
        <>
           <div className="app w-50 mx-auto">
               <Counter/>
               <hr /> 
               <InputVal/>
               <ToggleBtn/>
                
            </div>
           
        </>
     )
}
export default App;