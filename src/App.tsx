import React, { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import { useActions } from './hooks/useActions';

const App = () => {
  const {
    getNewTitle,
    getNewDescription,
    getNewNotes,
    getIsNewErrorTitle,
    getIsNewErrorDescription,
    getNewTags,
    getTags,
  } = useActions();
  useEffect(() => {
    getNewTitle();
    getIsNewErrorTitle();
    getNewDescription();
    getIsNewErrorDescription();
    getNewNotes();
    getNewTags();
    getTags();
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
