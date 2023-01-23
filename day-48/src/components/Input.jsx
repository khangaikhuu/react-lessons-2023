export default function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input value={value} onChange={onChange} />
    </label>
  );
}
