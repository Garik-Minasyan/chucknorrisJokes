import axios from "axios";
const baseURL = 'https://api.chucknorris.io/jokes/random';

const joksServices = {
  getQueryJoks: async () => {
    try {
      const response = await axios.get(baseURL)
      return response;
    } catch (e) {
      console.error(e)
    }
  },
}
export default joksServices;
