import Link from 'next/link'
import {
  IconFB,
  IconInstagram,
  IconLinkedin,
  IconTikTok,
  IconTwitter
} from 'src/icons'
import Style from './style.module.scss'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <div className={Style.footer}>
      <div className={Style.social}>
        <a href="https://www.facebook.com/knowmebest" target="_blank">
          <IconFB/>
        </a>
        <a href="https://twitter.com/the_knowme" target="_blank">
          <IconTwitter/>
        </a>
        <a href="https://www.linkedin.com/company/knowmebest" target="_blank">
          <IconLinkedin/>
        </a>
        <a href="https://www.instagram.com/the_knowme" target="_blank">
          <IconInstagram/>
        </a>
        <a href="https://www.tiktok.com/@theknowme_" target="_blank">
          <IconTikTok/>
        </a>
      </div>
      <div className={Style.policy}>
        <div className={Style.policyList}>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
        <div className={Style.policyCopyright}>
          <span>©{currentYear} Know Me company. All rights reserved.</span>
          <span>Various trademarks held by their respective owners.</span>
        </div>
      </div>
    </div>
  )
}
