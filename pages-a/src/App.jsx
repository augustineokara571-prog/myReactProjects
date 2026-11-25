import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from "./pages/Land";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Adding from "./pages/Adding";
import Product from "./pages/Product"
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import StudentsPage from "./pages/StudentsPage"
import Text2 from "./pages/Text2";
import Text from "./pages/Text";
import TodoList from "./pages/TodoList";
import Task from "./pages/Task";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import TextContextProvider from "./context/TextContext";
import ColorContextProvider from "./color/Context";
import TaskPage1 from './pages/TaskPage1';
import TaskPage2 from './pages/TaskPage2';
import Dashboard from "./pages/Dashboard";
import DmSignup from "./pages/DmSignup";
import UserContextProvider from "./context/UserContext";
import DogGenerator from "./pages/DogGenerator";
import AnTask from "./pages/AnTask";
import Project from "./pages/Project";
import PageInfo from "./pages/PageInfo";
import PageDetails from "./pages/PageDetails";
import SignIn from "./pages/SignIn";
import StudentInfo from "./pages/StudentInfo";
import BooksInfo from "./pages/BooksInfo";
import Dentist from "./pages/Dentist";
import EventPlanning from "./pages/EventPlanning";
import ComplaintPage from "./pages/ComplaintPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adding" element={<Adding />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/text2" element={<Text2 />} />
        <Route path="/text" element={<Text />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/task" element={<Task />} />
        <Route path="/page1" element={<TextContextProvider>
          <Page1 />
        </TextContextProvider>} />
        <Route path="/page2" element={<TextContextProvider>
          <Page2 />
        </TextContextProvider>} />
        <Route path="taskpage1" element={<ColorContextProvider>
          <TaskPage1 />
        </ColorContextProvider>} />
        <Route path="taskpage2" element={<ColorContextProvider>
          <TaskPage2 />
        </ColorContextProvider>} />
        <Route path="dmsignup" element={<UserContextProvider>
          <DmSignup />
        </UserContextProvider>} />
        <Route path="dashboard" element={<UserContextProvider>
          <Dashboard />
        </UserContextProvider>} />
        <Route path="/doggenerator" element={<DogGenerator />} />
        <Route path="/antask" element={<AnTask />} />
        <Route path="/project" element={<Project />} />
        <Route path="/pageinfo/:id" element={<PageInfo />} />
        <Route path="/pagedetails/:id/:content" element={<PageDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/studentinfo" element={<StudentInfo />} />
        <Route path="/booksinfo" element={<BooksInfo />} />
        <Route path="/dentist" element={<Dentist />} />
        <Route path="/events" element={<EventPlanning />} />
        <Route path="/complaintpage" element={<ComplaintPage />} />
      </Routes>
    </BrowserRouter>
  )
}