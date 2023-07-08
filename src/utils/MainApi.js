import { BASE_URL } from './auth';

class Api {
    constructor(options) {
        this._options = options;
        this._baseUrl = this._options.baseUrl;
        this._headers = this._options.headers;
    }

    _checkHeaders = () => {
        this._token = localStorage.getItem('token');
        this._headers.authorization = `Bearer ${this._token}`;
        return this._headers;
    };

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    getUserInfo() {
        return this._request(`${this._baseUrl}/users/me`, {
            headers: this._checkHeaders(),
        })
    }

    setUserInfo(name, email) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._checkHeaders(),
            body: JSON.stringify({
                name,
                email
            })
        })
    }

    getMovies() {
        return this._request(`${this._baseUrl}/movies`, {
            headers: this._checkHeaders(),
        })
    }

    createMovies(data) {
        return this._request(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._checkHeaders(),
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co/${data.image.url}`,
                thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
                trailerLink: data.trailerLink,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
    }

    deleteMovies = (id) => {
        return this._request(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: this._checkHeaders(),
        })
            .then(response => response)
    }

}
const api = new Api({
    baseUrl: BASE_URL,
    headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
    }
});

export default api;

