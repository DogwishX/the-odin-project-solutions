import "./Icon.css";

function Icon({ src, alt, onClick, style, id = null }) {
  return (
    <div className="icon" style={style} onClick={onClick} id={id}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Icon;
