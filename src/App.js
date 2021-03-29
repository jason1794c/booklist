import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import BookListContext from './contexts/BookListContext';

function App() {
  return (
    <div className='App'>
      <BookListContext>
        <Header />
        <Body />
      </BookListContext>
    </div>
  );
}

export default App;
