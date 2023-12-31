import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { DarkModeContext } from '@/context/darkMode.context'
import { font } from '.'
import { getLocalData } from '@/utils/ultils'

import GlobalStyle from '@/styles/GlobalStyle'

import * as S from '../styles/style'

import arrowLeftDark from '../assets/icons8-left-arrow-white50.png'
import arrowLeftLight from '../assets/icons8-left-arrow-black50.png'

type Props = {
  data: CountryData
  borderCountries: CountryData[]
}

const CountrySDetails = ({ data, borderCountries }: Props) => {
  const [borders, setBorders] = useState<string[]>([])
  const [route, setRoute] = useState<string | string[] | undefined>()
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
    flags
  } = data

  const router = useRouter()
  const routeName = router.query.name

  useEffect(() => {
    setRoute(routeName)
  }, [routeName])

  useEffect(() => {
    setBorders([])
    if (borderCountries) {
      setBorders(borderCountries.map((bord) => bord.name))
      console.log(borders)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [borderCountries])

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
            <Image
              width={560}
              height={400}
              sizes="(max-width: 767px) 320px, 229px"
              src={flags.png}
              alt={`${name} flag`}
            />
            <S.ContainerDetails>
              <h3>{name}</h3>
              <S.MinDetails>
                <S.Details>
                  <span>
                    Native Name: <span>{nativeName}</span>
                  </span>
                  <span>
                    Population:{' '}
                    <span>{population.toLocaleString('en-US')}</span>
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
                  <S.LinkBorder
                    href={`/${bord}`}
                    darkmode={darkMode.toString()}
                    key={bord}
                  >
                    {bord}
                  </S.LinkBorder>
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

export const getServerSideProps: GetServerSideProps<{
  data: CountryData
  borderCountries: CountryData[]
}> = async (context) => {
  const params = context.params as ParsedUrlQuery
  const route = params.name

  const dataJson: CountryData[] = await getLocalData()

  const country: CountryData[] = dataJson.filter(
    (country: CountryData) => country.name === route
  )

  const data = country[0]

  const borderCountries: CountryData[] = dataJson.filter(
    (country: CountryData) => {
      if (data?.borders) {
        for (let i = 0; i < data.borders.length; i++) {
          if (country.alpha3Code === data.borders[i]) {
            return country
          }
        }
      }
    }
  )

  if (data === undefined || borderCountries === undefined || data === null) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data,
      borderCountries
    }
  }
}
