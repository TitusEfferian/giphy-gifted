import React from 'react';
import Header from './Components/HeaderSearch';


const handleChange = (event, setInput) => {
  setInput(event.target.value)
}

const App = () => {
  const [inputValue, setInput] = React.useState('')

  return (
    <Header onChange={handleChange} setInput={setInput} value={inputValue}/>
  )
}

export default App;
