export const BASE_URL = "https://moviesexplorer.api.alexey.nomoredomains.rocks";

function handleRequest(url, method, body, token) {
    const headers = { "Content-Type": "application/json" };
    const config = { method, headers };
    if (token !== undefined) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    if (body !== undefined) {
        config.body = JSON.stringify(body);
    }
    return fetch(`${BASE_URL}${url}`, config)
        .then((res) => {
            return res.ok
                ? res.json()
                : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
        });
}

export function registration({ name, email, password }) {
    return handleRequest("/signup", "POST", { name, email, password });
}

export function authorization({ email, password }) {
    return handleRequest("/signin", "POST", { email, password });
}

export function getContent(token) {
    return handleRequest("/users/me", "GET", undefined, token);
}