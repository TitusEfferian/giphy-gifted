import React from 'react';
import Header from './Components/HeaderSearch';
import Content from './Components/Content';
import { SEARCH_ENDPOINT, RANDOM_ENDPOINT, TRENDING_ENDPOINT } from './apis';
import { ORANGE } from './styles/baseColor';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      loading: false,
      result: {},
      skipObserve: true,
      randomValue: '',
      isTrending: false,
    }
  }

  /**
   * init Intersection Observer for infinite scroll purpose
   */
  componentDidMount() {
    this.handleFirstLoadAndRandomLoad()
    this.observer = new IntersectionObserver(
      (entities, observer) => {
        entities.forEach(x => {
          if (x.isIntersecting && !this.state.skipObserve) {
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
    const { inputValue } = this.state
    if (inputValue) {
      this.setState({
        loading: true,
        result: {
          data: [],
          offset: 0,
        },
        skipObserve: true,
      })

      const result = await fetch(`${SEARCH_ENDPOINT}${inputValue}&offset=0`)
      const parse = await result.json()

      this.setState({
        loading: false,
        result: {
          data: parse.data,
          offset: parse.pagination.offset,
        },
        skipObserve:false,
      })
    }
    else {
      alert('please type your keyword')
    }
  }

  async handleFirstLoadAndRandomLoad() {
    this.setState({
      loading: true,
    })
    const resultFetch = await fetch(RANDOM_ENDPOINT)
    const parse = await resultFetch.json()
    const resultFetchSearch = await fetch(`${SEARCH_ENDPOINT}${parse.data.title}&offset=0`)
    const parseSearch = await resultFetchSearch.json()
    this.setState({
      result: {
        data: parseSearch.data,
        offset: parseSearch.pagination.offset,
      },
      loading: false,
      randomValue: parse.data.title,
      skipObserve: false,
    })
  }

  async handleTrendingLoad(){
    this.setState({
      loading:true,
      result: {
        data: [],
        offset: 0,
      },
      skipObserve: true,
    })
    const resultFetch = await fetch(`${TRENDING_ENDPOINT}&limit=20`)
    const parse = await resultFetch.json()
    this.setState({
      result:{
        data: parse.data,
        offset: parse.pagination.offset
      },
      loading:false,
    })
    
  }

  /**
   * infinite scroll:
   * these method used and triggered when IO component already in viewport,
   * re-fetch the endpoint and push new data into existing data.
   */
  async handleNext() {
    const { inputValue, result, randomValue } = this.state
    const nextValue = inputValue || randomValue
    const resultFetch = await fetch(`${SEARCH_ENDPOINT}${nextValue}&offset=${result.offset + 1}`)
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

  handleChangeTrending() {
    const { isTrending } = this.state
    if(!isTrending){
      this.handleTrendingLoad()
    }
    else{
      this.handleFirstLoadAndRandomLoad()
    }
    this.setState({ isTrending: !isTrending, })
  }

  renderTrendingTag() {
    const { isTrending } = this.state
    const styles = {
      container: {
        marginTop: 80,
        display: 'flex',
        alignItems: 'center'
      },
      tagContainer: {
        color: 'white',
        margin: 0,
        marginLeft: 8,
        padding: '8px 24px',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: ORANGE,
        borderStyle: 'solid',
        backgroundColor: isTrending ? ORANGE : null,
        cursor: 'pointer'
      }
    }
    return (
      <div style={styles.container}>
        <h4 style={styles.tagContainer} onClick={() => { this.handleChangeTrending() }}>
          Trending
        </h4>
      </div>
    )
  }

  render() {
    const { result, inputValue, loading, } = this.state;
    const data = result.data || []
    return (
      <>
        <Header
          onChange={(event) => { this.handleChange(event) }}
          value={inputValue}
          onClick={() => { this.handleSearchClick() }}
        />
        {
          !inputValue
            ?
            this.renderTrendingTag()
            :
            null
        }
        {
          loading ? null : <Content data={data} />
        }
        <div style={{ height: 40, marginBottom: 16 }} ref={ref => (this.divRef = ref)}></div>
      </>
    )
  }
}

export default App
