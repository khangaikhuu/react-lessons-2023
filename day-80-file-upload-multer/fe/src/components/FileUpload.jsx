import { useState } from "react";

export default function FileUpload() {
  const URL = "http://localhost:8080/fileUpload";
  const [imageURLs, setImageURLs] = useState([]);

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

    console.log(FETCHED_JSON);
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
      <table border="1">
        <thead>
          <th>Nr</th>
          <th>Image</th>
        </thead>
        <tbody>
          {imageURLs.map((img) => (
            <img src={img} alt="img" />
          ))}
        </tbody>
      </table>
    </div>
  );
}
