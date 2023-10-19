import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import style from './style.module.scss'

interface IProps {
  data: StaticImageData[]
}

export const Carousel: FC<IProps> = ({ data }) => {
  return (
    <div className={style.carousel}>
      {data.map((item, index) => (
        <div key={index}>
          <Image src={item.src} width={item.width} height={item.height} alt={item.src}/>
        </div>
      ))}
    </div>
  )
}
