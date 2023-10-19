import { Drawer as DrawerBasic } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Button } from 'src/components'
import { useOnClickOutside, useWindowSize } from 'src/hooks'
import { IconClose, IconLogo, IconMLogo, IconMenu } from 'src/icons'
import style from './style.module.scss'

export const Header = () => {
  const router = useRouter()
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const { isMobile } = useWindowSize()
  useOnClickOutside(buttonRef, () => setIsOpen(false))

  const handleRedirect = (url: string) => router.push(url)

  const hideScrollBar = (reset?: boolean) => {
    const root: HTMLElement | null = document.querySelector('#root')

    if(root) {
      root.style.minHeight = 'unset'
      root.style.height = window.innerHeight + 'px'
    }

    if(root && reset) {
      root.style.minHeight = '100vh'
      root.style.height = 'unset'
      root.style.overflow = 'auto'
    }
  }

  useEffect(() => {
    if(isOpen && isMobile) {
      hideScrollBar()
    }

    return () => {
      hideScrollBar(true)
    }
  }, [isOpen, isMobile])

  return (
    <div
      className={style.header}
    >
      <div onClick={() => handleRedirect('/')}>
        {isMobile ? <IconMLogo/> : <IconLogo/>}
      </div>

      {isMobile ? (
        <>
          <div id="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconClose/> : <IconMenu/>}
          </div>

          <DrawerBasic
            zIndex={998}
            className={style.drawer}
            open={isOpen}
            height={334}
            placement="top"
            closable={false}
            onClose={() => setIsOpen(false)}
            // key={contentIndex}
            bodyStyle={{ padding: 0 }}
          >
            <div className={style.mNav}>
              <div
                className="body-1 f-medium"
              >
                About Us
              </div>
              <div
                className="body-1 f-medium"
              >
                Affiliate Program
              </div>
              <div
                className="body-1 f-medium"
              >
                Blog
              </div>
              <div>
                <Button
                  style={{ width: 180, background: '#000', color: '#fff', border: 'unset' }}
                >
                  Vibe Jobs
                </Button>
                <Button
                  style={{ width: 180 }}
                >
                  Vibe Applicants
                </Button>
              </div>
            </div>
          </DrawerBasic>
        </>
      ) : (
        <div className={style.nav}>
          <div>
            <div
              className="body-1 f-medium"
            >
              About Us
            </div>
            <div
              className="body-1 f-medium"
            >
              Affiliate Program
            </div>
            <div
              className="body-1 f-medium"
            >
              Blog
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
