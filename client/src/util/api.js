import axios from 'axios'

export const API = {
    getBooks: function(search) {
        return axios.get(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCSqbdfQ9RYKuA3KmIdfAQXQEf8fE_dxO4`)
    },
    postBook: function(book) {
        return axios.post('api/books', book);
    },
    deleteSaved: function(id) {
        return axios.delete(`api/books/${id}`);
    },
    getSavedBooks: function() {
        return axios.get('api/books');
    }
}