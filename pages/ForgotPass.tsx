import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-[#55d6c2] flex items-center justify-center">
      <div className="h-fit w-2/3 bg-[#a2e2d8]">
        <form action="" className="flex flex-col items-center h-full w-full py-24 gap-10">
          <div className="flex flex-col space-y-6 w-1/2">
            <h1 className="text-center">Don’t worry, Enter your email below and we will send you a link to change password.</h1>
          <input type="password" placeholder="Email" className="bg-white p-4 border-2"/>
          </div>
          <div className="flex flex-col space-y-4">

          <Link to={"/sign-in"} type="submit" className="bg-[#03cc17] cursor-pointer text-white px-12 py-2 rounded-lg text-[20px]">Submit</Link>
          <Link to={"/sign-in"} type="submit" className="bg-[#296ef2] cursor-pointer text-white px-12 py-2 rounded-lg text-[20px]">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
