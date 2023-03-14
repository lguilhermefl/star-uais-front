import type { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle } from 'swapi-ts'

export type Collection = 'Films' | 'People' | 'Planets' | 'Species' | 'Starships' | 'Vehicles'
export type CollectionDataType =
  | IFilm[]
  | IPeople[]
  | IPlanet[]
  | ISpecie[]
  | IStarship[]
  | IVehicle[]
