export default function Login() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-[#0B132B] px-6 py-12 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <div className="flex items-center justify-center h-12 w-12 text-[#6366F1]">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
        
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-white">
          Login your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#1C2541] px-6 py-8 shadow-xl rounded-lg border border-[#232F52] sm:px-10">
          <form className="space-y-5" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 bg-[#243056] py-2 text-white shadow-sm ring-1 ring-inset ring-[#2D3D6D] placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#6366F1] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1.5">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 bg-[#243056] py-2 text-white shadow-sm ring-1 ring-inset ring-[#2D3D6D] placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#6366F1] sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#2D3D6D] bg-[#243056] text-[#6366F1] focus:ring-[#6366F1]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#6366F1] hover:text-[#5053C4]">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#6366F1] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5053C4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#2D3D6D]" />
              </div>
              <div className="relative flex justify-center text-xs text-gray-400">
                <span className="bg-[#1C2541] px-2">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-[#243056] px-3 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-[#2D3D6D] hover:bg-[#2D3D6D]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.52 5.52 0 0 1 8.5 13c0-3.037 2.463-5.5 5.5-5.5c1.48 0 2.82.587 3.807 1.543l3.14-3.14A9.95 9.95 0 0 0 14 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10c0-.734-.075-1.448-.214-2.143H12.24z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-[#243056] px-3 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-[#2D3D6D] hover:bg-[#2D3D6D]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.0 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-400">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-[#6366F1] hover:text-[#5053C4]">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  );
}