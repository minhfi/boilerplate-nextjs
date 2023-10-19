import { FC } from 'react'
import style from './style.module.scss'

interface IProps {
  title: string
}

export const Label: FC<IProps> = ({ title }) => {
  return (
    <div className={style.label}>
      <div className={style.title}>{title}</div>
    </div>
  )
}
