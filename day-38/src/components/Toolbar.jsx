import AlertButton from "./AlertButton";
export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
      <AlertButton message="Downloading!">Download Image</AlertButton>
    </div>
  );
}
