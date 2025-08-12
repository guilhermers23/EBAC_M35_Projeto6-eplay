import axios from "axios";
const baseURL = "https://ebac-fake-api.vercel.app/api/eplay";

export const getSaleGames = () => {
  const res = axios.get(`${baseURL}/promocoes`);
  return res;
};

export const getComingSoonGames = () => {
  const res = axios.get(`${baseURL}/em-breve`);
  return res;
};

export const getFeaturedGames = () => {
  const res = axios.get(`${baseURL}/destaque`);
  return res;
};

export const getActionGames = () => {
  const res = axios.get(`${baseURL}/acao`);
  return res;
};

export const getSportsGames = () => {
  const res = axios.get(`${baseURL}/esportes`);
  return res;
};

export const getFightGames = () => {
  const res = axios.get(`${baseURL}/luta`);
  return res;
};

export const getRpgGames = () => {
  const res = axios.get(`${baseURL}/rpg`);
  return res;
};

export const getSimulationGames = () => {
  const res = axios.get(`${baseURL}/simulacao`);
  return res;
};
