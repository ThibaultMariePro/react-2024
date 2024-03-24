/**
 * Input component for text input fields.
 *
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string} value - The current value of the input field.
 * @param {(s:string)=>void} onChange - The callback function to handle input changes.
 */
export function Input({ placeholder, value, onChange, type }) {
  return (
    <input
      type={type}
      className="bg-gradient-to-tr from-cyan-100 to-cyan-300 border shadow hover:shadow-md rounded-md p-2 mt-2"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
