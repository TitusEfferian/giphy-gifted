export const giphyKey = 'xtQm4zLq33bocPsDatGDr7uBwvz9VFQN'

export const limit = 20
export const SEARCH_ENDPOINT = `http://api.giphy.com/v1/gifs/search?limit=${limit}&api_key=${giphyKey}&q=`
export const RANDOM_ENDPOINT = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}`
export const TRENDING_ENDPOINT = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=${limit}`