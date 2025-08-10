export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-gray-300">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"></div>
              <span className="text-xl font-bold text-white">MediaForge</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The ultimate media processing platform for creators and
              professionals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/image-converter"
                  className="hover:text-white transition-colors"
                >
                  Image Converter
                </a>
              </li>
              <li>
                <a
                  href="/Image-resizer"
                  className="hover:text-white transition-colors"
                >
                  Image Compressor/Resizer
                </a>
              </li>
              <li>
                <a
                  href="/PDF compressor"
                  className="hover:text-white transition-colors"
                >
                  PDF compressor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 MediaForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
