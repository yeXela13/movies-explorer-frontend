export default async function findMovies() {
    try {
      const response = await fetch('https://api.nomoreparties.co/beatfilm-movies');
      const dataMovies = await response.json();
      return dataMovies;
    } catch (error) {
      console.error('getMovies', error);
      throw error;
    }
  }