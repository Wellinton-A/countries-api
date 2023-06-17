import { useContext } from 'react'
import { CardContainer, InfoContainer } from './style'
import { DarkModeContext } from '@/context/darkMode.context'

import Image from 'next/image'

type Props = {
  country: any
}

const Card = ({ country }: Props) => {
  const { darkMode } = useContext(DarkModeContext)

  const route = country.name.common

  return (
    <CardContainer
      href={`/${route}`}
      title="Click to see more details about the country"
      darkmode={darkMode.toString()}
    >
      <Image
        width={264}
        height={160}
        src={country.flags.png}
        alt={`${country.flag.alt}`}
      />
      <InfoContainer>
        <div>
          <h3>{country.name.common}</h3>
          <span suppressHydrationWarning>
            Population:{' '}
            <span suppressHydrationWarning>
              {country.population.toLocaleString()}
            </span>
          </span>
          <span suppressHydrationWarning>
            Region: <span suppressHydrationWarning>{country.region}</span>
          </span>
          <span suppressHydrationWarning>
            Capital: <span suppressHydrationWarning>{country.capital}</span>
          </span>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}

export default Card
