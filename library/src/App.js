import './App.css';
import NewBookForm from './NewBookForm/NewBookForm';

function App() {
  return (
    <>
      <h1 className='title'>My book library</h1>
      <p className='project-description'>
        This is a project for The Odin Project in which I have to make a library
        using Object Constructors and LocalStorage.'
      </p>
      <NewBookForm/>
    </>
  );
}

export default App;
