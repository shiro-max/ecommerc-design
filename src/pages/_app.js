import { AppProvider } from '@/context'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from './components/layout'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </Layout>
      </ThemeProvider>
  )
}
