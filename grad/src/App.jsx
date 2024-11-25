import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ConatactUs/ContactUs';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import ITHalls from './Pages/ITHalls/ITHalls';
import ITHome from './Pages/ITHome/ITHome';
import ITLabs from './Pages/ITLabs/ITLabs';
import Login from './Pages/Login/Login';
import Material from './Pages/Material/Material';
import ProfDetails from './Pages/ProfDetails/ProfDetails';
import Schedule from './Pages/Schedule/Schedule';
import TADetails from './Pages/TADetails/TADetails';
import AppLayout from './UI/AppLayout';
import CoursesDetails3 from './Pages/CoursesDetails/CoursesDetails3';
import ITHallDevices5 from './Pages/ITHallDevices/ITHallDevices5';
import ThirdFloorLabDevices1 from './Pages/ITLabDevices/ThirdFloor/ThirdfFloorLabDevices1';
import JoiningApp from './Pages/JoiningApp/JoiningApp';
import HallsSchedule from './Pages/AdminSchedules/HallsSchedule';
import LabsSchedule from './Pages/AdminSchedules/LabsSchedule';
import ProfSchedule from './Pages/AdminSchedules/ProfSchedule';
import ThirdFloorLabDevices2 from './Pages/ITLabDevices/ThirdFloor/ThirdFloorLabDevices2';
import ThirdFloorLabDevices3 from './Pages/ITLabDevices/ThirdFloor/ThirdFloorLabDevices3';
import ThirdFloorLabDevices4 from './Pages/ITLabDevices/ThirdFloor/ThirdFloorLabDevices4';
import ThirdFloorLabDevices6 from './Pages/ITLabDevices/ThirdFloor/ThirdFloorLabDevices6';
import ThirdFloorLabDevices5 from './Pages/ITLabDevices/ThirdFloor/ThirdFloorLabDevices5';
import FourthFloorLabDevices6 from './Pages/ITLabDevices/FourthFloor/FourthFloorLabDevices6';
import FourthFloorLabDevices1 from './Pages/ITLabDevices/FourthFloor/FourthFloorLabDevices1';
import FourthFloorLabDevices2 from './Pages/ITLabDevices/FourthFloor/FourthFloorLabDevices2';
import FourthFloorLabDevices3 from './Pages/ITLabDevices/FourthFloor/FourthFloorLabDevices3';
import FourthFloorLabDevices4 from './Pages/ITLabDevices/FourthFloor/FourthFloorLabDevices4';
import FourthFloorLabDevices5 from './Pages/ITLabDevices/FourthFloor/FourthFloorLabDevices5';
import SecondFloorLabDevices6 from './Pages/ITLabDevices/SecondFloor/SecondFloorLabDevices6';
import SecondFloorLabDevices5 from './Pages/ITLabDevices/SecondFloor/SecondFloorLabDevices5';
import SecondFloorLabDevices4 from './Pages/ITLabDevices/SecondFloor/SecondFloorLabDevices4';
import SecondFloorLabDevices3 from './Pages/ITLabDevices/SecondFloor/SecondFloorLabDevices3';
import SecondFloorLabDevices2 from './Pages/ITLabDevices/SecondFloor/SecondFloorLabDevices2';
import SecondFloorLabDevices1 from './Pages/ITLabDevices/SecondFloor/SecondFloorLabDevices1';
import GroundFloorLabDevices6 from './Pages/ITLabDevices/GroundFloor/GroundFloorLabDevices6';
import GroundFloorLabDevices5 from './Pages/ITLabDevices/GroundFloor/GroundFloorLabDevices5';
import GroundFloorLabDevices4 from './Pages/ITLabDevices/GroundFloor/GroundFloorLabDevices4';
import GroundFloorLabDevices3 from './Pages/ITLabDevices/GroundFloor/GroundFloorLabDevices3';
import GroundFloorLabDevices2 from './Pages/ITLabDevices/GroundFloor/GroundFloorLabDevices2';
import GroundFloorLabDevices1 from './Pages/ITLabDevices/GroundFloor/GroundFloorLabDevices1';
import FirstFloorLabDevices6 from './Pages/ITLabDevices/FirstFloor/FirstFloorLabDevices6';
import FirstFloorLabDevices5 from './Pages/ITLabDevices/FirstFloor/FirstFloorLabDevices5';
import FirstFloorLabDevices4 from './Pages/ITLabDevices/FirstFloor/FirstFloorLabDevices4';
import FirstFloorLabDevices3 from './Pages/ITLabDevices/FirstFloor/FirstFloorLabDevices3';
import FirstFloorLabDevices2 from './Pages/ITLabDevices/FirstFloor/FirstFloorLabDevices2';
import FirstFloorLabDevices1 from './Pages/ITLabDevices/FirstFloor/FirstFloorLabDevices1';
import ITHallDevices9 from './Pages/ITHallDevices/ITHallDevices9';
import ITHallDevices8 from './Pages/ITHallDevices/ITHallDevices8';
import ITHallDevices7 from './Pages/ITHallDevices/ITHallDevices7';
import ITHallDevices6 from './Pages/ITHallDevices/ITHallDevices6';
import ITHallDevices4 from './Pages/ITHallDevices/ITHallDevices4';
import ITHallDevices2 from './Pages/ITHallDevices/ITHallDevices2';
import ITHallDevices1 from './Pages/ITHallDevices/ITHallDevices1';
import ITHallDevices3 from './Pages/ITHallDevices/ITHallDevices3';
import CoursesDetails1 from './Pages/CoursesDetails/CoursesDetails1';
import CoursesDetails2 from './Pages/CoursesDetails/CoursesDetails2';
import CoursesDetails4 from './Pages/CoursesDetails/CoursesDetails4';
import TaSchedule from './Pages/AdminSchedules/TaSchedule';
import AboutUs from './Pages/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/joiningApp",
        element: <JoiningApp />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/home/aboutus",
        element: <AboutUs />
      },
      {
        path: "/home/professor",
        element: <ProfDetails />
      },
      {
        path: "/home/ta",
        element: <TADetails />
      },
      {
        path: "/home/schedule",
        element: <Schedule />
      },
      {
        path: "/home/courses",
        element: <Courses />
      },
      {
        path: "/home/courses/coursesDetails1",
        element: <CoursesDetails1 />
      },
      {
        path: "/home/courses/coursesDetails2",
        element: <CoursesDetails2 />
      },
      {
        path: "/home/courses/coursesDetails3",
        element: <CoursesDetails3 />
      },
      {
        path: "/home/courses/coursesDetails4",
        element: <CoursesDetails4 />
      },
      {
        path: "/home/material",
        element: <Material />
      },
      {
        path: "/itHome",
        element: <ITHome />
      },
      {
        path: "/itHome/itHalls",
        element: <ITHalls />
      },
      {
        path: "/itHome/itHalls/itHallsDevices1",
        element: <ITHallDevices1 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices2",
        element: <ITHallDevices2 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices3",
        element: <ITHallDevices3 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices4",
        element: <ITHallDevices4 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices5",
        element: <ITHallDevices5 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices6",
        element: <ITHallDevices6 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices7",
        element: <ITHallDevices7 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices8",
        element: <ITHallDevices8 />
      },
      {
        path: "/itHome/itHalls/itHallsDevices9",
        element: <ITHallDevices9 />
      },
      {
        path: "/itHome/itLabs",
        element: <ITLabs />
      },
      {
        path: "/itHome/itLabs/GroundFloorLabDevices1",
        element: <GroundFloorLabDevices1 />
      },
      {
        path: "/itHome/itLabs/GroundFloorLabDevices2",
        element: <GroundFloorLabDevices2 />
      },
      {
        path: "/itHome/itLabs/GroundFloorLabDevices3",
        element: <GroundFloorLabDevices3 />
      },
      {
        path: "/itHome/itLabs/GroundFloorLabDevices4",
        element: <GroundFloorLabDevices4 />
      },
      {
        path: "/itHome/itLabs/GroundFloorLabDevices5",
        element: <GroundFloorLabDevices5 />
      },
      {
        path: "/itHome/itLabs/GroundFloorLabDevices6",
        element: <GroundFloorLabDevices6 />
      },
      {
        path: "/itHome/itLabs/FirstFloorLabDevices1",
        element: <FirstFloorLabDevices1 />
      },
      {
        path: "/itHome/itLabs/FirstFloorLabDevices2",
        element: <FirstFloorLabDevices2 />
      },
      {
        path: "/itHome/itLabs/FirstFloorLabDevices3",
        element: <FirstFloorLabDevices3 />
      },
      {
        path: "/itHome/itLabs/FirstFloorLabDevices4",
        element: <FirstFloorLabDevices4 />
      },
      {
        path: "/itHome/itLabs/FirstFloorLabDevices5",
        element: <FirstFloorLabDevices5 />
      },
      {
        path: "/itHome/itLabs/FirstFloorLabDevices6",
        element: <FirstFloorLabDevices6 />
      },
      {
        path: "/itHome/itLabs/SecondFloorLabDevices1",
        element: <SecondFloorLabDevices1 />
      },
      {
        path: "/itHome/itLabs/SecondFloorLabDevices2",
        element: <SecondFloorLabDevices2 />
      },
      {
        path: "/itHome/itLabs/SecondFloorLabDevices3",
        element: <SecondFloorLabDevices3 />
      },
      {
        path: "/itHome/itLabs/SecondFloorLabDevices4",
        element: <SecondFloorLabDevices4 />
      },
      {
        path: "/itHome/itLabs/SecondFloorLabDevices5",
        element: <SecondFloorLabDevices5 />
      },
      {
        path: "/itHome/itLabs/SecondFloorLabDevices6",
        element: <SecondFloorLabDevices6 />
      },
      {
        path: "/itHome/itLabs/thirdFloorLabDevices1",
        element: <ThirdFloorLabDevices1 />
      },
      {
        path: "/itHome/itLabs/thirdFloorLabDevices2",
        element: <ThirdFloorLabDevices2 />
      },
      {
        path: "/itHome/itLabs/thirdFloorLabDevices3",
        element: <ThirdFloorLabDevices3 />
      },
      {
        path: "/itHome/itLabs/thirdFloorLabDevices4",
        element: <ThirdFloorLabDevices4 />
      },
      {
        path: "/itHome/itLabs/thirdFloorLabDevices5",
        element: <ThirdFloorLabDevices5 />
      },
      {
        path: "/itHome/itLabs/thirdFloorLabDevices6",
        element: <ThirdFloorLabDevices6 />
      },
      {
        path: "/itHome/itLabs/FourthFloorLabDevices1",
        element: <FourthFloorLabDevices1 />
      },
      {
        path: "/itHome/itLabs/FourthFloorLabDevices2",
        element: <FourthFloorLabDevices2 />
      },
      {
        path: "/itHome/itLabs/FourthFloorLabDevices3",
        element: <FourthFloorLabDevices3 />
      },
      {
        path: "/itHome/itLabs/FourthFloorLabDevices4",
        element: <FourthFloorLabDevices4 />
      },
      {
        path: "/itHome/itLabs/FourthFloorLabDevices5",
        element: <FourthFloorLabDevices5 />
      },
      {
        path: "/itHome/itLabs/FourthFloorLabDevices6",
        element: <FourthFloorLabDevices6 />
      },
      {
        path: "hallsSchedule",
        element: <HallsSchedule />
      },
      {
        path: "labsSchedule",
        element: <LabsSchedule />
      },
      {
        path: "ProfSchedule",
        element: <ProfSchedule />
      },
      {
        path: "TaSchedule",
        element: <TaSchedule />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}
export default App;
