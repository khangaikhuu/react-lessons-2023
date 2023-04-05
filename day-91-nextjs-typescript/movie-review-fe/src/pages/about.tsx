import Image from "next/image";
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
      <div>
        <div style={{ width: 500, height: 200, position: "relative" }}>
          <Image
            src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
            fill
            style={{ objectFit: "cover" }}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
