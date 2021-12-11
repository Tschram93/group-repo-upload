import axios from 'axios'

const PROXY_URL = `https://octoproxymus.herokuapp.com/?secret=${process.env.REACT_APP_OCTOPROXYMUS_SECRET}&url=`;

const API_URL = `https://tastedive.com/api/similar?info=1`;

export default {
  getRecommendations: function(searchTerm) {
    return axios(`${PROXY_URL}${encodeURIComponent(`${API_URL}&q=${searchTerm}`) }`)
  }
}