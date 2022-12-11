const key = "de23191153c0fe1ae91c294bbddda090"

const requests = {
  requestPopular: `
	https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
  requestTopRated: `
	https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
  requestTrending: `
	https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
  requestUpcoming: `
	https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
  requestHerror: `
	https://api.themoviedb.org/3/movie/movie?api_key=${key}&language=en-US`,
}

export default requests
