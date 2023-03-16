import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { v4 as uuidv4 } from "uuid";
import { IRegions } from "../../types/country";

import { IFullCountry } from "./interfaces";

const urlEndpoints: string[] = [
  "africa",
  "americas",
  "europe",
  "asia",
  "oceania",
];

export const fetchRegions = createAsyncThunk(
  "regions/fetchRegions",
  async () => {
    const regions: IRegions[] = [];
    try {
      await Promise.all(
        urlEndpoints.map(async (urlEndpoint: string) => {
          try {
            const result = await axios.get(
              `https://restcountries.com/v3.1/region/${urlEndpoint}`
            );
            const data = await result.data;

            const sortedData = data.sort(
              (prevCountry: IFullCountry, nextCountry: IFullCountry) =>
                nextCountry.population - prevCountry.population
            );

            const getTopCountries = sortedData.slice(0, 10);

            const filteredCountries = getTopCountries.map(
              (topCountry: IFullCountry) => {
                return {
                  value: topCountry.population,
                  id: uuidv4(),
                  name: topCountry.altSpellings[0],
                };
              }
            );

            regions.push({
              region: urlEndpoint,
              countries: [...filteredCountries],
            });
          } catch (e) {
            return (e as AxiosError).message;
          }
        })
      );

      return regions;
    } catch (e) {
      return (e as AxiosError).message;
    }
  }
);
