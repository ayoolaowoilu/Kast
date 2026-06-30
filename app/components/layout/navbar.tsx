import { motion } from "framer-motion";
import KastButton from "./button";

import Logo from "../logo";
import { redirect } from "next/navigation";

export default function Navbar(){
       
    return  <div>
          <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center"
      >
        <nav className="bg-white/80 backdrop-blur-md border border-black/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-xl shadow-black/5">
          <motion.div className="flex items-center gap-3 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <Logo />
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {["Features", "Experience", "Reviews"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#0A0A0A] transition-colors"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <KastButton onClick={()=>redirect("/auth/signin")} variant="outlined" size="sm">Log In</KastButton>
            </div>
            <KastButton onClick={()=>redirect("/auth/signup")} size="sm">Get Started</KastButton>
          </div>
        </nav>
      </motion.div>
    <div className="h-16" />
    </div>

          }