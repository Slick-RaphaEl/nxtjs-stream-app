import Head from "next/head";
import Image from "next/image";
import requests from "../utils/requests";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Results from "./components/Results";

export default function Home({results}) {
  return (
    <div className="">
      <Head>
        <title>hulu too</title>
        <meta name="description" content="hulu clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props:{
      results: request.results
    }
  };
}
