export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=15&type=multiple',
  timeout: 4000
})