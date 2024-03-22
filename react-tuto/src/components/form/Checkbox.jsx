export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div className="flex justify-evenly items-center">
      <input
      className="animate-pulse"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="italic text-orange-700" htmlFor={id}>{label}</label>
    </div>
  );
}
