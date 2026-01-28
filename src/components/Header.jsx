/* src/components/Header.jsx */
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1630644964646-6cc8ac5b47ea"
            alt="Satvik's Stays"
            className="h-8 w-8 rounded object-cover"
          />
          <span className="font-semibold text-lg">Satvik&apos;s Stays</span>
        </div>

        {/* Right section: Social + Contact */}
        <div className="flex items-center gap-6 text-sm text-gray-700">
          
          {/* Social icons */}
          <div className="flex items-center gap-4 text-gray-500">
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaFacebookF className="cursor-pointer hover:text-black" />
          </div>

          {/* Contact */}
          <div className="flex flex-col leading-tight text-right">
            <span className="font-medium">+91 9988776655</span>
            <a
              href="mailto:info@gmail.com"
              className="text-gray-500 underline hover:text-black"
            >
              info@gmail.com
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
