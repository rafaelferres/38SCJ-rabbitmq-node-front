import Head from 'next/head'
import Header from '../components/header'
import Form from '../components/form'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Form />
    </>
  )
}
