import { useContext } from 'react'
import { CardContainer, ImageContainer, InfoContainer } from './style'
import { DarkModeContext } from '@/context/darkMode.context'

import { CountryData } from '@/pages'

type Props = {
  country: CountryData
}

const Card = ({ country }: Props) => {
  const { darkMode } = useContext(DarkModeContext)

  const { population, name, region, capital, flags } = country

  const route = name

  return (
    <CardContainer
      href={`/${route}`}
      title="Click to see more details about the country"
      darkmode={darkMode.toString()}
    >
      <ImageContainer style={{ backgroundImage: `url(${flags.png})` }} />
      <InfoContainer>
        <div>
          <h3>{name}</h3>
          <span suppressHydrationWarning>
            Population:{' '}
            <span suppressHydrationWarning>{population.toLocaleString()}</span>
          </span>
          <span suppressHydrationWarning>
            Region: <span suppressHydrationWarning>{region}</span>
          </span>
          <span suppressHydrationWarning>
            Capital: <span suppressHydrationWarning>{capital}</span>
          </span>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}

export default Card
