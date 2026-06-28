import Image from "next/image";
import Logo from "../logo";

export default function Footer(){

    return  <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <Logo />
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>

          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Kast Inc.
          </div>
        </div>
      </footer>
}