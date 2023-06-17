declare type CountryData = {
  name: string
  nativeName: string
  region: string
  subregion: string
  capital: string
  population: number
  topLevelDomain: string[]
  currencies: [
    {
      code: string
      name: string
      symbol: string
    }
  ]
  languages: [
    {
      name: string
    }
  ]
  borders: string[]
  flags: {
    svg: string
    png: string
  }
  alpha3Code: string
}
