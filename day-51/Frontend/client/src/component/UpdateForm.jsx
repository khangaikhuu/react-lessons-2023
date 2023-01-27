export default function UpdateForm({ setCurrentData, currentData, setData }) {
  const UPDATE_URL = "http://localhost:8080/data";
  async function sendPutRequest(data) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(UPDATE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setData(FETCHED_JSON);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.major.value);
    const sendData = {
      id: currentData.id,
      name: e.target.name.value,
      major: e.target.major.value,
    };
    sendPutRequest(sendData);
  }
  function handleFormName(e) {
    setCurrentData({ ...currentData, name: e.target.value });
  }
  function handleFormMajor(e) {
    setCurrentData({ ...currentData, major: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            placeholder="Name"
            value={currentData.name}
            onChange={handleFormName}
          />
        </label>
        <br />
        <label>
          Major:
          <input
            name="major"
            placeholder="Major"
            value={currentData.major}
            onChange={handleFormMajor}
          />
        </label>
        <br />
        <button>Update</button>
      </form>
    </div>
  );
}
