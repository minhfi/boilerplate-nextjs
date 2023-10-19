import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { EEnv } from 'src/constants'
// import Manifest from 'src/../public/manifest.json'

interface IProps {
  title?: string
  description?: string
  siteName?: string
  image?: string
}

export const Metadata: FC<IProps> = (props) => {
  const {
    title = 'The video first, job marketplace',
    siteName = 'www.knowmebest.com',
    image = `${EEnv.NEXT_PUBLIC_ORIGIN}/preview-thumbnail.jpg`,
    description = 'A destination where anyone presents themselves in the most relatable, positive light and at the same time connects with people they will build their careers and life with.'
  } = props

  const router = useRouter()
  const url = `${EEnv.NEXT_PUBLIC_ORIGIN}${router.asPath}`

  return (
    <Head>
      {/* <title>{title ? `${title} | ${Manifest.name}` : Manifest.name}</title> */}
      <title>{title}</title>

      <link rel="manifest" href="/manifest.json"/>
      <link rel="canonical" href={url}/>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="application-name" content="KNOWME BEST"/>
      <meta name="apple-mobile-web-app-title" content="KNOWME BEST"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
      <meta name="description" content={description}/>
      <meta name="format-detection" content="telephone=no"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
      <meta name="msapplication-TileColor" content="#211f5a"/>
      <meta name="msapplication-tap-highlight" content="no"/>
      <meta name="theme-color" content="#FFFFFF"/>

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>
      <meta property="og:locale" content={router.locale}/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta name="og:title" property="og:title" content={title}/>
      <meta name="og:description" property="og:description" content={description}/>
      <meta property="og:site_name" content={siteName}/>
      <meta property="og:url" content={url}/>
      <meta property="og:image" content={image}/>
      <meta property="og:image:width" content="720"/>
      <meta property="og:image:height" content="480"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:url" content={url}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
    </Head>
  )
}
