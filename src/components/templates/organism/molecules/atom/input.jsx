import "./atoms_style.css";

export default function Input({
  br,
  brRadius,
  bgColor,
  outline,
  shadow,
  inpOnclick,
  inpValue,
  type,
  chek,
  inpName,
  onchange,
  placeholder
}) {
  return (
    <input
      style={{
        border: br,
        borderRadius: brRadius,
        backgroundColor: bgColor,
        outline: outline,
        boxShadow: shadow,
      }}
      onClick={inpOnclick}
      value={inpValue}
      type={type}
      checked={chek}
      name={inpName}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
}
