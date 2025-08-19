import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { IGame } from "../interfaces/IGame";

const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ebac-fake-api.vercel.app/api/eplay"
  }),
  endpoints: (builder) => ({
    getFeaturedGames: builder.query<IGame, void>({
      query: () => "destaque"
    }),
    getSaleGames: builder.query<IGame[], void>({
      query: () => "promocoes"
    }),
    getComingSoonGames: builder.query<IGame[], void>({
      query: () => "em-breve"
    }),
    getActionGames: builder.query<IGame[], void>({
      query: () => "acao"
    }),
    getSportsGames: builder.query<IGame[], void>({
      query: () => "esportes"
    }),
    getFightGames: builder.query<IGame[], void>({
      query: () => "luta"
    }),
    getRpgGames: builder.query<IGame[], void>({
      query: () => "rpg"
    }),
    getSimulationGames: builder.query<IGame[], void>({
      query: () => "simulacao"
    }),
    getGameById: builder.query<IGame, string>({
      query: (id) => `jogos/${id}`
    }),
  })
});

export const { useGetFeaturedGamesQuery, useGetSaleGamesQuery, useGetComingSoonGamesQuery, useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSportsGamesQuery, useGetSimulationGamesQuery, useGetGameByIdQuery } = API;
export default API;
