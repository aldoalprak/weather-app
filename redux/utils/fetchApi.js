import axios from 'axios'

class FetchApi {
    static headers(headers) {
      return {
          "Content-Type": 'application/json',
          Accept: 'application/json',
          ...headers
      }
    }

    static config(headers, params) {
      return {
          headers: this.headers(headers),
          ...params
      }
    }

    static get(url) {
      return axios({
        method: 'get',
        url: `https://api.openweathermap.org/${url}`
      })
    }
}

export default FetchApi