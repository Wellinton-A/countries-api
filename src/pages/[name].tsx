import { use, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'

import { DarkModeContext } from '@/context/darkMode.context'
import { font } from '.'

import arrowLeftLight from '../assets/icons8-left-arrow-black50.png'
import arrowLeftDark from '../assets/icons8-left-arrow-white50.png'

import GlobalStyle from '@/styles/GlobalStyle'
import * as S from '../styles/style'

import { fetchDataByCode, fetchDataByName } from '@/utils/ultils'

type Props = {
  data: any
}

const CountrySDetails = ({ data }: Props) => {
  const [route, setRoute] = useState<string | string[] | undefined>()
  const { darkMode } = useContext(DarkModeContext)
  const [borders, setBorders] = useState<any[]>([])
  const [borderCountries, setBorderCountries] = useState<[]>([])

  const router = useRouter()
  const routeName = router.query.name

  let lang = ''
  for (const key in data.nativeName) {
    lang = key
    break
  }

  useEffect(() => {
    async function fetchData() {
      if (data.borders) {
        const response: [] = await fetchDataByCode(data.borders)
        setBorderCountries(response)
      }
    }

    fetchData()
  }, [data])

  useEffect(() => {
    const bord: any[] = []
    if (data.borders) {
      borderCountries?.forEach((count: any) => {
        bord.push(count.name.common)
      })
    }

    setBorders(bord)
  }, [borderCountries])

  let currency = ''
  for (const key in data.currencies) {
    currency = key
    break
  }

  const getLanguages = () => {
    const langs = []

    for (const key in data.languages) {
      langs.push(key)
    }

    return langs.map((item) => <span key={item}>{data.languages[item]}, </span>)
  }

  useEffect(() => {
    setRoute(routeName)
  }, [routeName])

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
              src={data.flags.png}
              alt={`${data.flags.alt}`}
            />
            <S.ContainerDetails>
              <h3>{data.name.common}</h3>
              <S.MinDetails>
                <S.Details>
                  <span>
                    Native Name:{' '}
                    <span>
                      {data.name.nativeName
                        ? `${data.name.nativeName[lang]}`
                        : 'none'}
                    </span>
                  </span>
                  <span>
                    Population:{' '}
                    <span>{data.population.toLocaleString('en-US')}</span>
                  </span>
                  <span>
                    Region: <span>{data.region}</span>
                  </span>
                  <span>
                    Sub Region: <span>{data.subregion}</span>
                  </span>
                  <span>
                    Capital: <span>{data.capital}</span>
                  </span>
                </S.Details>
                <S.Details>
                  <span>
                    Top Level Domain: <span>{data.tld}</span>
                  </span>
                  <span>
                    Currencies:{' '}
                    <span>
                      {data.currencies
                        ? data.currencies[currency].name
                        : 'None'}
                    </span>
                  </span>
                  <span>Languages: {getLanguages()}</span>
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

export const getServerSideProps = async (context: any) => {
  const params = context.params as ParsedUrlQuery
  const route = params.name as string

  const dataJson = await fetchDataByName(route)

  const country = dataJson.filter(
    (country: any) => country.name.common === route
  )

  const data = country[0]

  if (data === undefined || data === null) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data
    }
  }
}
