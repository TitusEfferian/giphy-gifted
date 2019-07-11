import React from 'react';
import Header from './Components/HeaderSearch';
import Content from './Components/Content';
import { giphyKey, SEARCH_ENDPOINT } from './apis';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      loading: false,
      result: {},
      firstInit: true,
    }
  }

  /**
   * init Intersection Observer for infinite scroll purpose
   */
  componentDidMount() {
    this.observer = new IntersectionObserver(
      (entities, observer) => {
        entities.forEach(x => {
          if (x.isIntersecting && !this.state.firstInit) {
            this.handleNext()
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
    )

    this.observer.observe(this.divRef)
  }

  async handleSearchClick() {
    const {inputValue} = this.state
    this.setState({
      loading: true
    })

    const result = await fetch(`${SEARCH_ENDPOINT}${inputValue}&offset=0`)
    const parse = await result.json()

    this.setState({
      loading: false,
      result: {
        data: parse.data,
        offset: parse.pagination.offset,
      },
      firstInit: false,
    })
  }

  async handleNext() {
    const { inputValue, result } = this.state
    const resultFetch = await fetch(`${SEARCH_ENDPOINT}${inputValue}&offset=${result.offset+1}`)
    const parse = await resultFetch.json()
    this.setState({
      result: {
        data: [...result.data, ...parse.data],
        offset: parse.pagination.offset,
      }
    })
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    const { result, inputValue, loading } = this.state;
    const data = result.data || []
    return (
      <>
        <Header
          onChange={(event) => { this.handleChange(event) }}
          value={inputValue}
          onClick={() => { this.handleSearchClick() }}
        />
        {
          loading ? null : <Content data={data} />
        }
        <div style={{ height: 40, marginBottom: 16 }} ref={ref => (this.divRef = ref)}></div>
      </>
    )
  }
}

export default App
