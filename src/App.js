import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Friends from './components/Friends/Friends';
import classes from './App.module.css';


const App = (props) => {
  debugger;
  return (

    <div className='app-wrapper'>
      <Header />
      <div className={classes.side}>
        <Navbar />
        <Sidebar sidebar={props.state.sidebar} />
      </div>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
