import ReactDOM from "react-dom";
import EditableField from "../EditableField/EditableField";
import './AddBtn.css'


function AddBtn(props) {
  return <button onClick={() => showChildren(props)}>{props.title}</button>;
}

function showChildren(props) {
  ReactDOM.render(
    <div id='form' className="hidden">{props.children}
    <button onClick={({target}) => target.classList.add('hidden')}>Hide Content</button></div>,
    document.querySelector("body")
  );
}

export default AddBtn;
