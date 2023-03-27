import { useEffect, useState } from "react";

export default function FileUpload() {
  const URL = "http://localhost:8080/fileUpload";
  const FILE_URL = "http://localhost:8080/files";
  const [imageURLs, setImageURLs] = useState([]);

  async function fetchFiles() {
    const FETCHED_DATA = await fetch(FILE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setImageURLs(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    console.log(event.target.image.files[0]);
    const data = new FormData();
    const files = event.target.image.files;
    data.append("image", files[0]);

    const options = {
      method: "POST",
      body: data,
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setImageURLs(FETCHED_JSON.data);
  };
  return (
    <div>
      <form
        method="post"
        enctype="multipart/form-data"
        onSubmit={handleFileUpload}
      >
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form>
      {imageURLs.map((img) => (
        <img src={img} alt="img" />
      ))}
    </div>
  );
}
