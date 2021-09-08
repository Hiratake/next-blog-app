import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import UtilStyle from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>

      <section className={UtilStyle.headingMd}>
        <p>マークアップ園児でデザイナー🎨✨</p>
        <p>
          This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>

      <section className={`${UtilStyle.headingMd} ${UtilStyle.padding1px}`}>
        <h2 className={UtilStyle.headingLg}>Blog</h2>
        <ul className={UtilStyle.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={UtilStyle.listItem} key={id}>
              <Link href={ `/posts/${id}` }>
                <a>{ title }</a>
              </Link>
              <br />
              <small className={ UtilStyle.lightText}>
                <Date dateString={ date } />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
