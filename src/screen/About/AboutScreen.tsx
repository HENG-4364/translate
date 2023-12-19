import Link from 'next/link';
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import ChangeLanguage from '@/components/languages/lang';

const AboutScreen = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div>
        <h1>{t('home.title')}</h1>
        <ul>
          <li>
            <Link href="/">{t('home.homeLink')}</Link>
          </li>
          <li>
            <Link href="/about">{t('home.aboutLink')}</Link>
          </li>
          <li>
            <ChangeLanguage />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutScreen
