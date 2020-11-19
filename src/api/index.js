import axios from "axios";
import idbKeyVal from "./idb-wrapper";

export const APP_DATA_API = "appDataApi";
export const QUOTES_API = "quotesDataApi";
export const YOUTUBE_API = "youtubeDataApi";


const apiKeyValue = {
    appDataApi: "https://5f3b6023fff8550016ae52ec.mockapi.io/api/v1/myappdata",
    quotesDataApi: "https://type.fit/api/quotes",
    youtubeDataApi: "https://my-channel-backend.herokuapp.com/youtube"
}

const instance = axios.create({
  baseURL: "https://my-channel-backend.herokuapp.com"
});

export const fetchAppData = (key) => {
  return idbKeyVal
    .get(key)
    .then(async (data) => {
      if (!data) {
        
        const result = await axios(`${apiKeyValue[key]}`);
        idbKeyVal.set(key, result.data);
        return result.data;
      }
      return data;
    })
    .catch(() => console.log("error"));
};


export default instance;
