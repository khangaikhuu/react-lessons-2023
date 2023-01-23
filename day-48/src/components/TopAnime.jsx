import { useEffect } from "react";
import { useState } from "react";

export default function TopAnime() {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`;

  useEffect(() => {
    callData();
  }, [page]);

  async function callData() {
    const JSONdata = await fetch(URL);
    const RESULTdata = await JSONdata.json();
    setAnimes(RESULTdata.data);
    console.log(animes);
  }

  //   callData();

  return (
    <div>
      <h1>Day-48 - Top Anime</h1>
      {animes &&
        animes.map((anime) => {
          return <h6>{anime.title}</h6>;
        })}
      {/* <button onClick={callData}>Fetch Top Anime</button> */}
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}
