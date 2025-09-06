import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { IGame } from "../interfaces/IGame";

type Product = {
  id: number;
  price: number
};

type PurchasePayload = {
  products: Product[];
  billing: {
    name: string;
    email: string;
    document: string;
  },
  delivery: {
    email: string;
  },
  payment: {
    card: {
      active: boolean;
      owner?: {
        name: string;
        document: string;
      }
      name?: string;
      number?: string;
      expires?: {
        moth: number;
        year: number;
      }
      code?: number;
    }
    installments: number;
  }
};

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
    purchase: builder.mutation<{ success: boolean; orderId?: string }, PurchasePayload>({
      query: (data) => ({
        url: "checkout",
        method: "POST",
        body: data,
      })
    })
  })
});

export const { useGetFeaturedGamesQuery, useGetSaleGamesQuery,
  useGetComingSoonGamesQuery, useGetActionGamesQuery,
  useGetFightGamesQuery, useGetRpgGamesQuery,
  useGetSportsGamesQuery, useGetSimulationGamesQuery,
  useGetGameByIdQuery, usePurchaseMutation } = API;
export default API;
