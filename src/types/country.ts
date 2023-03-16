export interface ICountry {
  id: string;
  value: number;
  name: string;
}

export interface IRegions {
  region: string;
  countries: ICountry[];
}
