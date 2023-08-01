import React, { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import { useActions } from './hooks/useActions';

const App = () => {
  const { getNewTitle, getNewDescription, getNewNotes } = useActions();
  useEffect(() => {
    getNewTitle();
    getNewDescription();
    getNewNotes();
    console.log('effect');
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
