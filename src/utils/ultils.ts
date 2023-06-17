import path from 'path'
import fs from 'fs/promises'
import process from 'process'

export const getLocalData = async (): Promise<CountryData[]> => {
  const filePath = path.join(process.cwd(), 'data', 'data.json')
  const jsonData = await fs.readFile(filePath)
  const jsonString: string = jsonData.toString('utf8')
  const dataJson: CountryData[] = JSON.parse(jsonString)
  return dataJson
}
