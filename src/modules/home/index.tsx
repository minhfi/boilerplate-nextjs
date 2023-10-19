import { FC } from 'react'
import HomeCircle from 'src/../public/images/home-circle.svg'
import HomeLikes from 'src/../public/images/home-likes.svg'
import HomeMCircle from 'src/../public/images/home-m-circle.svg'
import HomeMLikes from 'src/../public/images/home-m-likes.svg'
import HomeMStars from 'src/../public/images/home-m-stars.svg'
import HomeMThumbnail from 'src/../public/images/home-m-thumbnail.svg'
import HomeStars from 'src/../public/images/home-stars.svg'
import HomeThumbnail from 'src/../public/images/home-thumbnail.svg'
import { Button } from 'src/components'
import { useWindowSize } from 'src/hooks'
import { IconArrowLeft } from 'src/icons'
import style from './style.module.scss'

export const Home: FC = () => {
  const { isMobile } = useWindowSize()

  const handleVideo = () => {
    const video = document.getElementById('video') as HTMLVideoElement | null

    if (video && video.muted) {
      video.muted = false
      video.removeAttribute('autoplay')
      video.controls = true

      setTimeout(() => {
        video.play()
      }, 0)
    }
  }

  return isMobile ? (
    <div className={style.mHome}>
      <div className={style.mContainer}>
        <div className={style.mContent}>
          <div>
            <HomeMCircle/>
            <h5>
              there’s no humanity <br/> in trying to interpret <br/>a piece of
              paper
            </h5>
          </div>
          <p>
            The Video First, <br/> Jobs Marketplace
          </p>
          <div>
            <Button
              style={{
                width: 225,
                background: '#000',
                color: '#fff',
                border: 'unset'
              }}
            >
              I’m a Job Seeker <IconArrowLeft style={{ marginLeft: 8 }}/>
            </Button>
            <Button style={{ width: 225 }}>
              I’m Hiring <IconArrowLeft/>
            </Button>
          </div>
        </div>
        <div className={style.mThumbnail}>
          <div>
            <HomeMLikes/>
          </div>
          <p>welcome to knowme</p>
          <div>
            <HomeMThumbnail/>
            <div>
              <video
                id="video"
                muted
                autoPlay
                loop
                playsInline
                onClick={handleVideo}
              >
                <source src="/video/welcome.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
          <div>
            <HomeMStars/>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={style.home}>
      <div className={style.container}>
        <div className={style.thumbnail}>
          <div>
            <HomeLikes/>
          </div>
          <p>welcome to knowme</p>
          <div>
            <HomeThumbnail/>
            <div>
              <video id="video" muted autoPlay loop onClick={handleVideo}>
                <source src="/video/welcome.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
          <div>
            <HomeStars/>
          </div>
        </div>
        <div className={style.content}>
          <div>
            <HomeCircle/>
            <h5>
              there’s no humanity <br/> in trying to interpret <br/>a piece of
              paper
            </h5>
          </div>
          <p>The Video First, Jobs Marketplace</p>
          <div>
            <Button
              style={{
                width: 225,
                background: '#000',
                color: '#fff',
                border: 'unset'
              }}
            >
              I’m a Job Seeker <IconArrowLeft style={{ marginLeft: 8 }}/>
            </Button>
            <Button style={{ width: 225 }}>
              I’m Hiring <IconArrowLeft/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
