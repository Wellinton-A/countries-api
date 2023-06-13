import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'
import GlobalStyle from '@/styles/GlobalStyle'

import DarkModeProvider from '@/context/darkMode.context'

export const font = "'Nunito Sans', sans-serif"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === '/_error') return <Component {...pageProps} />

  return (
    <>
      <GlobalStyle font={font} />
      <DarkModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeProvider>
    </>
  )
}
