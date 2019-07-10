import React from 'react';
import Header from './Components/HeaderSearch';
import Content from './Components/Content';


const handleChange = (event, setInput) => {
  setInput(event.target.value)
}

const handleSearchClick = async (setResult,inputValue, setLoading) => {
  setLoading(true)
  const result = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=xtQm4zLq33bocPsDatGDr7uBwvz9VFQN&q=${inputValue}&limit=20&offset=0`)
  const parse = await result.json()
  setLoading(false)
  setResult({
    data: parse.data,
    offset: parse.pagination.offset
  })
}

// const handleNext = async (offset,prevResult,setResult) => {
//   const result = await fetch('http://api.giphy.com/v1/gifs/search?api_key=xtQm4zLq33bocPsDatGDr7uBwvz9VFQN&q=cheese&limit=20&offset='+offset)
//   const parse = await result.json()
//   setResult({
//     data: [...prevResult, ...parse.data],
//     offset: parse.pagination.offset
//   })
// }

const App = () => {
  const [inputValue, setInput] = React.useState('')
  const [result, setResult] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  const data = result.data || [];

  return (
    <>
      <Header
        onChange={handleChange}
        setInput={setInput}
        value={inputValue}
        onClick={() => { handleSearchClick(setResult, inputValue, setLoading) }}
      />
      {/* <button onClick={()=>{handleNext(result.offset+1,result.data,setResult)}}>next</button> */}
      {
        loading ? <h1 style={{color:'white'}}>loading</h1> : <Content data={data} />
      }
      
    </>
  )
}

export default App;
