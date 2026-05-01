import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-12">
        <h1 className="text-[12rem] font-black leading-none text-teal-50/50 select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl font-extrabold text-slate-900 tracking-tight">Oops! Page not found.</p>
        </div>
      </div>
      
      <p className="text-xl font-medium text-slate-500 max-w-md mb-12">
        It looks like you've taken a detour from the symposium. Let's get you back to the research schedule.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-7 px-10 rounded-2xl text-lg shadow-xl shadow-teal-200">
            <Home className="mr-2 w-5 h-5" />
            Back Home
          </Button>
        </Link>
        <Button size="lg" variant="ghost" className="text-slate-600 font-bold py-7 px-10 rounded-2xl text-lg hover:bg-slate-50 border border-slate-200" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 w-5 h-5" />
          Go Back
        </Button>
      </div>
      
      <div className="mt-24 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-48 h-48 text-teal-600 fill-current">
          <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,15 C30.7,15 15,30.7 15,50 C15,69.3 30.7,85 50,85 C69.3,85 85,69.3 85,50 C85,30.7 69.3,15 50,15 Z" />
        </svg>
      </div>
    </div>
  );
}
