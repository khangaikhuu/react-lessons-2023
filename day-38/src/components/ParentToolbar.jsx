export default function ParentToolbar() {
  return (
    <div
      onClick={() => {
        alert("It is not appropriated");
      }}
    >
      <div
        className="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert("Playing!");
          }}
        >
          Play Movie
        </button>
        <button onClick={() => alert("Uploading!")}>Upload Image</button>
      </div>
    </div>
  );
}
