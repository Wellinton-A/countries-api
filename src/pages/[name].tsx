import Head from 'next/head'
import { useRouter } from 'next/router'

import GlobalStyle from '@/styles/GlobalStyle'
import { font } from '.'
import { useContext } from 'react'
import { DarkModeContext } from '@/context/darkMode.context'
import Link from 'next/link'

const CountrySDetails = () => {
  const { darkMode } = useContext(DarkModeContext)

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
          <Link href={'/'}>Back</Link>
        </div>
      </main>
    </>
  )
}

export default CountrySDetails
