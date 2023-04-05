import Link from "next/link";
import React from "react";

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/theaters/list");
  const theaterData = await theaterRequest.json();
  console.log(theaterData);
  return {
    props: {
      theater: theaterData,
    },
  };
}

export default function Home(props: any): JSX.Element {
  console.log(props);

  const side = typeof window ? "client" : "server";
  return (
    <div>
      <div>Welcome!</div>
      <div>You're currently on the {side}-side.</div>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
      <Link href="/greeting/John?age=25">Greeting Page</Link>
      {/* <Link href="/posts/2021-08-01/first-post">Posts Page</Link> */}
      <Link
        href={{
          pathname: "/posts/[date]/[slug]",
          query: { date: "2021-08-01", slug: "first-post" },
        }}
      >
        Posts Page
      </Link>
    </div>
  );
}
