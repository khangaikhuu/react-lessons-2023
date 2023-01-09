import ChildButton from "./ChildButton";

export default function PlayButton({movieName}) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <ChildButton onClick={handlePlayClick}>Play {movieName}</ChildButton>;
}
