import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-my-burger-86396-default-rtdb.firebaseio.com/"
});

export default instance;