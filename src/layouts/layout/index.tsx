import clsx, { ClassValue } from 'clsx'
import { FC, ReactNode } from 'react'
import { useBehaviorMapper } from 'src/hooks'
import { LayoutService } from 'src/services/Layout.service'
import { Footer, Header } from '..'

interface ILayoutProps {
  className?: ClassValue
  children?: ReactNode
}

export const Layout: FC<ILayoutProps> = (props) => {
  const isFooter = useBehaviorMapper(LayoutService.footer$)

  return (
    <div className={clsx('fx-1 fx fx-column', props.className)}>
      <Header/>

      <div className="fx-1 fx fx-column">
        {props.children}
      </div>

      {isFooter && <Footer/>}
    </div>
  )
}
