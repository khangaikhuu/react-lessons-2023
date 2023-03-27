import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CategoryEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const URL = "http://localhost:8080/category";
  console.log(id);

  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    async function fetchCategory() {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryId: id,
        }),
      };
      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      if (FETCHED_JSON.status === "success") {
        setCategory(FETCHED_JSON.data);
      }
    }
    fetchCategory();
  }, [id]);

  function handleInputChange(e) {
    setCategory(e.target.value);
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    console.log(e.target.categoryName.value);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
        categoryName: e.target.categoryName.value,
        isEdit: true,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      navigate("/category/list");
    }
  }

  return (
    <div>
      <h1>Category Edit Form</h1>
      <form onSubmit={handleEditSubmit}>
        <input
          type="text"
          name="categoryName"
          value={category.name}
          onChange={handleInputChange}
        />
        <br />
        <button>Edit Save</button>
      </form>
    </div>
  );
}
