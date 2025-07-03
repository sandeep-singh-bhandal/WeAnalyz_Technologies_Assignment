import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import ForgotPass from "../pages/ForgotPass"
import Dashboard from "../pages/Dashboard"
import NewTicket from "../pages/NewTicket";
import MyTicket from "../pages/MyTicket";
import User from "../pages/User";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Navigate to="/sign-in" replace />} />
      <Route path="/sign-in" element={(<Login/>)} />
      <Route path="/sign-up" element={(<SignUp/>)} />
      <Route path="/forgot-password" element={(<ForgotPass/>)} />
      <Route path="/dashboard" element={(<Dashboard/>)} />
      <Route path="/new-ticket" element={(<NewTicket/>)} />
      <Route path="/my-ticket" element={(<MyTicket/>)} />
      <Route path="/user-profile" element={(<User/>)} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
