import Head from 'next/head'
import Header from '../components/header'
import Form from '../components/form'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coleta de Dados - FIAP</title>
      </Head>
      <Header />
      <Form />
    </>
  )
}
