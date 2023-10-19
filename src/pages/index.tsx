import { FC } from 'react'
import { Layout, Metadata } from 'src/layouts'
import { Home } from 'src/modules/home'

const HomePage: FC = () => {
  return (
    <>
      <Metadata/>

      <Layout>
        <Home/>
      </Layout>
    </>
  )
}

export default HomePage
