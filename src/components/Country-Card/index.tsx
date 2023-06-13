import { useContext } from 'react'
import { CardContainer, ImageContainer, InfoContainer } from './style'
import { DarkModeContext } from '@/context/darkMode.context'

import { Country } from '@/pages'

type Props = {
  country: Country
}

const Card = ({ country }: Props) => {
  const { darkMode } = useContext(DarkModeContext)

  const { population, name, region, capital, flags } = country

  const route = name.common

  return (
    <CardContainer
      href={`/${route}`}
      title="Click to see more details about the country"
      darkmode={darkMode.toString()}
    >
      <ImageContainer style={{ backgroundImage: `url(${flags.png})` }} />
      <InfoContainer>
        <div>
          <h3>{name.common}</h3>
          <span>
            Population: <span>{population.toLocaleString('en-Us')}</span>
          </span>
          <span>
            Region: <span>{region}</span>
          </span>
          <span>
            Capital: <span>{capital}</span>
          </span>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}

export default Card
