export const fethcAllData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  if (!response.ok) throw new Error('Unable to fetch data')
  return response.json()
}

export const fetchDataByName = async (route: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${route}`)
  if (!response.ok) throw new Error('Unable to fetch data')
  return response.json()
}

export const fetchDataByCode = async (code: object): Promise<[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${code}`
  )
  return response.json()
}
