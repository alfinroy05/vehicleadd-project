import logo from './logo.svg';
import './App.css';
import AddStudents from './components/AddStudents';
import SearchStudent from './components/SearchStudent';
import AddEmployee from './Employee/AddEmployee';
import EmployeeNavBar from './Employee/EmployeeNavBar';
import SearchEmployee from './Employee/SearchEmployee';
import AddPatient from './Patient/AddPatients';
import SearchPatient from './Patient/SearchPatient';
import Add from './Hospital/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchHospital from './Hospital/SearchHospital';
import DeleteHospital from './Hospital/DeleteHospital';
import View from './Hospital/View';
import Index from './Hospital/Index';
import SearchWorker from './Workers/SearchWorker';
import AddWorker from './Workers/AddWorker';
import ViewWorker from './Workers/ViewWorker';
import DeleteWorker from './Workers/DeleteWorker';
import IndexWork from './Workers/IndexWork';
import AddVehicle from './Parking/AddVehicle';
import SearchVehicle from './Parking/SearchVehicle';
import DeleteVehicle from './Parking/DeleteVehicle';
import ViewVehicle from './Parking/ViewVehicle';
import IndexVehicle from './Parking/IndexVehicle';
import ParkingNav from './Parking/ParkingNav';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Add/>}/>
     <Route path='/search' element={<SearchHospital/>}/>
     <Route path='/delete' element={<DeleteHospital/>}/>
     <Route path='/index' element={<Index/>}/>
     <Route path='/view' element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
