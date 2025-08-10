import icon from "../assets/icon.webp";

export function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div>
            <img src={icon} height={36} width={36} alt="icon" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            MediaForge
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#tools"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Tools
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
