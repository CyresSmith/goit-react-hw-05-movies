import axios from 'axios';

const URL = `https://api.themoviedb.org/3/`;
const key = 'ac91775ba29254b7e75060011bf34a90';

class MovieApiService {
  // https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

  constructor({ reqType, mediaType, timeWindow = 'week' }) {
    this.reqType = reqType;
    this.mediaType = mediaType;
    this.timeWindow = timeWindow;
    this.userRequest = null;
    this.page = 1;
    this.totalResults = 0;
  }

  async getReqData(id = null, page = 1) {
    let searchParams;
    let response;

    switch (this.reqType) {
      // get genres ==========================================================================

      case 'genre':
        searchParams = new URLSearchParams({
          api_key: key,
        });

        response = await axios.get(
          `${URL}${this.reqType}/${this.mediaType}/list?${searchParams}`
        );
        break;

      // get trending ==========================================================================

      case 'trending':
        searchParams = new URLSearchParams({
          api_key: key,
          page: page,
        });

        response = await axios.get(
          `${URL}${this.reqType}/${this.mediaType}/${this.timeWindow}?${searchParams}`
        );
        break;

      // get search ==========================================================================

      case 'search':
        searchParams = new URLSearchParams({
          api_key: key,
          query: this.userRequest,
          page: page,
        });

        response = await axios.get(
          `${URL}${this.reqType}/${this.mediaType}?${searchParams}`
        );
        break;

      // get getById ==========================================================================

      case 'getById':
        searchParams = new URLSearchParams({
          api_key: key,
        });

        response = await axios.get(
          `${URL}${this.mediaType}/${id}?${searchParams}`
        );
        break;

      // get getDetails ==========================================================================

      case 'movie':
        searchParams = new URLSearchParams({
          api_key: key,
        });

        response = await axios.get(
          `${URL}${this.mediaType}/${id}?${searchParams}`
        );
        break;

      case 'credits':
        searchParams = new URLSearchParams({
          api_key: key,
        });

        response = await axios.get(
          `${URL}${this.mediaType}/${id}/${this.reqType}?${searchParams}`
        );
        break;

      case 'reviews':
        searchParams = new URLSearchParams({
          api_key: key,
        });

        response = await axios.get(
          `${URL}${this.mediaType}/${id}/${this.reqType}?${searchParams}`
        );
        break;

      default:
        break;
    }

    const data = response.data;

    this.getTotalRes(data);
    return data;
  }

  resetPage() {
    this.page = 1;
  }

  set request(newRequest) {
    this.userRequest = newRequest;
  }

  get request() {
    return this.userRequest;
  }

  getTotalRes(data) {
    this.totalResults = data.total_results;
  }
}

export default MovieApiService;
