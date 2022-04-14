import Menu from '../components/Menu';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import HomeContainer from '../Containers/HomeContainer';
import ProfileContainer from '../Containers/ProfileContainer';
import TimeSlotState from '../context/TimeSlotState';

function App() {
  return (
    <div className="App">
      <TimeSlotState>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
          </Routes>
        </BrowserRouter>
      </TimeSlotState>
    </div>
  );
}

export default App;
