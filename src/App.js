//import logo from './logo.svg';
import './App.css';
//import React,{useState,useEffect,useMemo} from 'react';
import React,{useEffect,useState,useReducer,useRef} from 'react';

// function App() {
//   const [number ,setNumber] = useState(0);
//   const [dark,setDark] = useState(false);
  
//   const doubleNumber = useMemo(()=>{
//     return X2(number);
//   },[number]);

//   const themeStyle = useMemo(()=>{
//     return{
//         backgroundColor: dark ? 'black' : 'white',
//         color: dark ? 'white' : 'black'  
//     }
//   },[dark]);

//   useEffect(()=>{
//     console.log("Theme thay doi");
//   },[themeStyle]);
  
//   return(
//     <div className="App">
//       <div><input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} /></div>
//       <div><button type="button" onClick={() => setDark(prevDark => !prevDark)} >Channel Theme</button></div>
//       <div style={themeStyle}>{doubleNumber}</div>
//     </div>
//   );
// }
// function X2(num) {
//   console.log("Tinh toan");
//   return num * 2;
// }
function App () {
  const [age,setAge] = useState(10);
  
  useEffect(() =>{
    console.log("Channel = > "+age+" ");
    return ()=>{
      console.log("return")
      //setAge(18);
    };
  },[age]);

  return(
    
    <div className="App" >
      <div onClick={() =>{setAge(age+1)}}><h1>{age}</h1></div>
      <div><Counter></Counter></div>
      <div><TextInputWithFocusButton></TextInputWithFocusButton></div>
      

      
    </div>
  );
}
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    inputEl.current.value = "ABC";
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


export default App;
