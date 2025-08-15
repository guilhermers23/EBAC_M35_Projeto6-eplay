import axios from "axios";
export const baseURL = "https://ebac-fake-api.vercel.app/api/eplay";

export const getSaleGames = async () => {
  const res = axios.get(`${baseURL}/promocoes`);
  return res;
};

export const getComingSoonGames = async () => {
  const res = axios.get(`${baseURL}/em-breve`);
  return res;
};

export const getFeaturedGames = async () => {
  const res = axios.get(`${baseURL}/destaque`);
  return res;
};

export const getActionGames = async () => {
  const res = axios.get(`${baseURL}/acao`);
  return res;
};

export const getSportsGames = async () => {
  const res = axios.get(`${baseURL}/esportes`);
  return res;
};

export const getFightGames = async () => {
  const res = axios.get(`${baseURL}/luta`);
  return res;
};

export const getRpgGames = async () => {
  const res = axios.get(`${baseURL}/rpg`);
  return res;
};

export const getSimulationGames = async () => {
  const res = axios.get(`${baseURL}/simulacao`);
  return res;
};

export const getGameById = async (id: string) => {
  const res = axios.get(`${baseURL}/jogos/${id}`);
  return res;
};

