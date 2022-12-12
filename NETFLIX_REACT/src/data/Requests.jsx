const key = "de23191153c0fe1ae91c294bbddda090"

const requests = {
  requestLatest: `
	https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US
	`,
  requestNowPlaying: `
	https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`,
  requestPopular: `
	https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
  requestTopRated: `
	https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
  requestUpcoming: `
	https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
}

export default requests
