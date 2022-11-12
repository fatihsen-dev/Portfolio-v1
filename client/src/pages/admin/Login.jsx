import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <div className="w-full h-full grid place-items-center">
      <Helmet>
        <title>Login - Fatih Şen</title>
      </Helmet>
      <form className="border-2 dark:border-darkv3 flex flex-col gap-1 items-center bg-lightv1 dark:bg-darkv2 px-12 rounded py-14">
        <h2 className="text-4xl font-medium mb-6 dark:text-lightv1">
          Admin Login
        </h2>
        <div className="flex flex-col gap-0.5 text-white/80">
          <span>Username</span>
          <input
            className="bg-lightv3 text-lg w-80 placeholder-sm font-medium rounded px-2 py-1.5 text-darkv1 outline-none"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-0.5 text-white/80">
          <span>Password</span>
          <input
            className="bg-lightv3 text-lg w-80 font-medium rounded px-2 py-1.5 text-darkv1 outline-none"
            type="password"
            placeholder="*********"
          />
        </div>
        <button className="bg--600 w-full text-lightv1 bg-blue-600 hover:bg-blue-600/90 mt-5 font-medium py-1.5 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
