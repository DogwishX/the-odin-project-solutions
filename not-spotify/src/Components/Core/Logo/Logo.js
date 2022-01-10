import "./Logo.css";

function Logo({ src = "logo.png", text, id = null }) {
  return (
    <div className="logo" id={id}>
      <img className="logo__image" src={src} alt="logo" draggable="false" />
      {text && <p className="logo__text">{text}</p>}
    </div>
  );
}

export default Logo;
