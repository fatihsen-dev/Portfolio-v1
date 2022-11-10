import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <div className="w-full h-full grid place-items-center">
      <Helmet>
        <title>Login - Fatih Şen</title>
      </Helmet>
      <form className="flex flex-col gap-1 items-center bg-darkv2 px-12 rounded py-14">
        <h2 className="text-4xl font-semibold mb-6">Admin Login</h2>
        <div className="flex flex-col gap-0.5 text-white/80">
          <span>Username</span>
          <input
            className="text-lg w-80 placeholder-sm font-medium rounded px-2 py-1.5 text-darkv1 outline-none"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-0.5 text-white/80">
          <span>Password</span>
          <input
            className="text-lg w-80 font-medium rounded px-2 py-1.5 text-darkv1 outline-none"
            type="password"
            placeholder="*********"
          />
        </div>
        <button className="bg--600 w-full bg-indigo-600 hover:bg-indigo-600/90 mt-5 font-medium py-1.5 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
