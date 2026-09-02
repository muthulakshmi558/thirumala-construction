import { Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="hidden md:block bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-sm">

        {/* LEFT SIDE - PHONE */}
        <div className="flex items-center gap-6">

          <a
            href="tel:+917200747474"
            className="
              flex items-center gap-2
              hover:text-cyan-400
              transition-all duration-300
            "
          >
            <Phone
              size={14}
              className="text-pink-500"
            />

            +91 72007 47474
          </a>

          <a
            href="tel:+919344747447"
            className="
              flex items-center gap-2
              hover:text-cyan-400
              transition-all duration-300
            "
          >
            <Phone
              size={14}
              className="text-cyan-400"
            />

            +91 93447 47447
          </a>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* Email */}
          <a
            href="mailto:info@thirumalaconstruction.com"
            className="
              flex items-center gap-2
              hover:text-cyan-400
              transition-all duration-300
            "
          >
            <Mail
              size={15}
              className="text-pink-500"
            />

            info@thirumalaconstruction.com
          </a>


          {/* Divider */}
          <div className="w-[1px] h-4 bg-gray-600"></div>


          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="
              hover:text-cyan-400
              hover:-translate-y-1
              hover:scale-110
              transition-all duration-300
            "
          >
            <FaFacebookF size={15} />
          </a>


          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="
              hover:text-pink-500
              hover:-translate-y-1
              hover:scale-110
              transition-all duration-300
            "
          >
            <FaInstagram size={17} />
          </a>


          {/* WhatsApp */}
          <a
            href="#"
            aria-label="WhatsApp"
            className="
              hover:text-green-400
              hover:-translate-y-1
              hover:scale-110
              transition-all duration-300
            "
          >
            <FaWhatsapp size={17} />
          </a>

        </div>

      </div>
    </div>
  );
}

export default TopBar;