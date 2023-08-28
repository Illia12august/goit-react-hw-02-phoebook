export default function Filter({ value, filter }) {
  return (
    <div>
      <label>Find contacts by name</label>

      <input value={value} onChange={filter}></input>
    </div>
  );
}
