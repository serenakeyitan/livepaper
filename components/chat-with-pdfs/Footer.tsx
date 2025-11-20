import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 sm:py-10 lg:py-12 bg-black dark:bg-black border-t border-neutral-800 dark:border-neutral-700">
      <div className="container mx-auto px-10 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Contact */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-sm sm:text-base text-neutral-400">
              <span className="font-medium text-white">Contact:</span>{" "}
              <a href="mailto:support@kael.ai" className="hover:text-primary transition-colors break-all">
                support@kael.ai
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 order-1 md:order-2">
            <span className="text-sm sm:text-base text-neutral-400">Follow Us:</span>
            <div className="flex items-center gap-4 sm:gap-6">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="text-sm sm:text-base text-neutral-400 hover:text-primary transition-colors"
              >
                WeChat Official Account
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right order-3">
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400">
              © 2025 Kael.im — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
