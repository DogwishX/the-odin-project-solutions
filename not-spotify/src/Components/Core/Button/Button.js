import "./Button.css";

function Button({ id = null, text, onClick }) {
  return (
    <button className="button" id={id} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
