import { useRef, useState } from 'react';

function Check() {
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState('');

  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" id="message" name="message" />

      <h2>Updated: {updated}</h2>

      <button onClick={handleClick}>Update</button>
    </div>
  );
}

//     let initialState = {value: '', isTyping: false, loading: true};
//     function sampleReducer(initialState, action){
//         if(action.type === 'isTyping'){
//             return{
//                 ...initialState, isTyping: !initialState.isTyping };

//             }else if(action.type === 'loading'){
//                 return {
//                     ...initialState, loading: false};
//                 }else if (action.type = 'setValue'){
//                 return {
//                     ...initialState, value: action.value};
//                 } else {
//                     // initialState;
//                 }
//     }
// const [state, dispatch] = useReducer (sampleReducer, initialState
// );
// const handleChange =(e) => {
//     dispatch ({type: 'setValue', value: e.target.value});
//     if(state.value.length > 0 && state.value !== ''){
//         dispatch ({type: 'loading'});
//         dispatch({type: 'isTypying'})
//     }else{
//         // setLoadng(!loading)
//         //seIsTyping(!isTyping)
//     }
// const handleClick =()=>{
//     console.log('clicked')
// }

// return (
//     <div className="setvalue">
//         {state.isTyping && <span>typing a setValuer....</span>}
//         <input type ="number" value ={state.value} onChange = {handleChange}/>
//         <button disable ={state.loading} onClick = {handleClick}>
//             set count
//         </button>
//     </div>
// );
// }
// }

export default Check;
