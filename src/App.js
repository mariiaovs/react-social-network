import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Friends from './components/Friends/Friends';
import classes from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <div className={classes.side}>
        <Navbar />
        <Sidebar />
      </div>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
