import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const name = 'harry-potter'
export default function Home({posts}) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {posts.data.attributes.name}
      </h1>
      {/* <img src={posts.}/> */}
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.potterdb.com/v1/characters/' + name)
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}