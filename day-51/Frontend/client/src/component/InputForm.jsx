export default function InputForm({ isLoading, setIsLoading, setData }) {
  const POST_DATA_URL = "http://localhost:8080/data";

  async function postData(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);

    if (FETCHED_DATA) {
      setIsLoading(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
    };
    setIsLoading(true);
    postData(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          NAME:
          <input placeholder="Name" name="name" />
        </label>
        <br />
        <label>
          MAJOR:
          <input placeholder="Major" name="major" />
        </label>
        <br />
        <button>Submit</button>
        <br />
      </form>
    </div>
  );
}
