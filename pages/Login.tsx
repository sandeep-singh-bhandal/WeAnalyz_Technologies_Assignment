import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-[#55d6c2] flex items-center justify-center">
      <div className="h-fit w-2/3 bg-[#a2e2d8]">
        <form action="" className="flex flex-col items-center h-full w-full py-8 gap-10">
          <h1 className="text-[48px] italic font-700 roboto">Helpdesk System</h1>
          <div className="flex flex-col space-y-4 w-1/2">

          <input type="text" placeholder="Username" className="bg-white p-4 border-2" />
          <input type="password" placeholder="Password" className="bg-white p-4 border-2"/>
          </div>
          <Link  to={"/dashboard"} className="bg-[#03cc17] cursor-pointer text-white px-12 py-2 rounded-lg text-[20px]">Sign In</Link>
          <div className="w-1/2 flex justify-between">
            <Link to={"/forgot-password"} className="text-red-600 cursor-pointer">Forgot password?</Link>
            <Link to={"/sign-up"} className="cursor-pointer">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
