import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID UzTfjaN8wtcwj6Og8asnaUbC6RguRml_V16Z03OIcO4'
  }
});
