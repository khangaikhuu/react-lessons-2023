import React from "react";

export async function getStaticProps() {
  return {
    props: {
      content:
        "<h1>Айсен Николаев: Якут улс байгалийн баялгийн нөөцөөр ОХУ-д нэгдүгээрт жагсдаг</h1>",
    },
    revalidate: 600, // time in seconds (10 minutes)
  };
}

export default function About(props: any): JSX.Element {
  return (
    <div>
      <h1>Its an About page</h1>
      <div>
        <p>Theater Name: {props.content}</p>
      </div>
    </div>
  );
}
