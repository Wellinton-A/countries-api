import { useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { DarkModeContext } from '@/context/darkMode.context'
import { font } from '.'

import arrowLeftLight from '../assets/icons8-left-arrow-black50.png'
import arrowLeftDark from '../assets/icons8-left-arrow-white50.png'

import GlobalStyle from '@/styles/GlobalStyle'
import * as S from '../styles/style'

import path from 'path'
import fs from 'fs/promises'
import process from 'process'

type CountryData = {
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
}

type Props = {
  country: CountryData
}

const CountrySDetails = ({ country }: Props) => {
  const { darkMode } = useContext(DarkModeContext)
  const {
    name,
    nativeName,
    region,
    subregion,
    capital,
    population,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flags
  } = country

  const router = useRouter()
  const route = router.query.name

  return (
    <>
      <GlobalStyle darkmode={darkMode.toString()} font={font} />
      <Head>
        <title>Details {route}</title>
      </Head>
      <main>
        <div className="container">
          <S.BackContainer
            darkmode={darkMode.toString()}
            title="Click to return to home page"
            href={'/'}
          >
            {darkMode ? (
              <Image src={arrowLeftDark} alt="left arrow icon" />
            ) : (
              <Image src={arrowLeftLight} alt="left arrow icon" />
            )}
            <span>Back</span>
          </S.BackContainer>
          <S.DetailsCountryContainer>
            <S.ImageContainerDetails
              style={{ backgroundImage: `url(${flags.png})` }}
            />
            <S.ContainerDetails>
              <h3>{name}</h3>
              <S.MinDetails>
                <S.Details>
                  <span>
                    Native Name: <span>{nativeName}</span>
                  </span>
                  <span>
                    Population: <span>{population}</span>
                  </span>
                  <span>
                    Region: <span>{region}</span>
                  </span>
                  <span>
                    Sub Region: <span>{subregion}</span>
                  </span>
                  <span>
                    Capital: <span>{capital}</span>
                  </span>
                </S.Details>
                <S.Details>
                  <span>
                    Top Level Domain:{' '}
                    {topLevelDomain?.map((domain: string) => (
                      <span key={domain}>{domain}</span>
                    ))}
                  </span>
                  <span>
                    Currencies:{' '}
                    {currencies?.map((curr) => (
                      <span key={curr.code}>{curr.name}</span>
                    ))}
                  </span>
                  <span>
                    Languages:{' '}
                    {languages?.map((lang) => (
                      <span key={lang.name}>{lang.name}</span>
                    ))}
                  </span>
                </S.Details>
              </S.MinDetails>
              <S.BorderCountriesContainer darkmode={darkMode.toString()}>
                <h4>Border Countries:</h4>
                {borders?.map((bord) => (
                  <span key={bord}>{bord}</span>
                ))}
              </S.BorderCountriesContainer>
            </S.ContainerDetails>
          </S.DetailsCountryContainer>
        </div>
      </main>
    </>
  )
}

export default CountrySDetails

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as ParsedUrlQuery
  const route = params.name

  const filePath = path.join(process.cwd(), 'data', 'data.json')
  const jsonData = await fs.readFile(filePath)
  const jsonString: string = jsonData.toString('utf8')
  const data = JSON.parse(jsonString)

  const country = data.filter((country: CountryData) => country.name === route)

  return {
    props: {
      country: country[0]
    }
  }
}
