import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'

import DarkModeProvider from '@/context/darkMode.context'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === '/_error') return <Component {...pageProps} />

  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  )
}
