import React from 'react';
import Header from './Components/HeaderSearch';
import Content from './Components/Content';


const handleChange = (event, setInput) => {
  setInput(event.target.value)
}

const handleSearchClick = async (setResult) => {
  const result = await fetch('http://api.giphy.com/v1/gifs/search?api_key=xtQm4zLq33bocPsDatGDr7uBwvz9VFQN&q=cheese&limit=20&offset=0')
  const parse = await result.json()
  setResult(parse.data)
}

const App = () => {
  const [inputValue, setInput] = React.useState('')
  const [result, setResult] = React.useState([])
  console.log(result)
  return (
    <>
      <Header
        onChange={handleChange}
        setInput={setInput}
        value={inputValue}
        onClick={() => { handleSearchClick(setResult) }}
      />
      <Content result={result} />
    </>
  )
}

export default App;
