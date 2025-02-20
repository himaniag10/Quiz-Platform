// src/components/Layout/Footer.js
function Footer() {
  const handleClick = (e, id) => {
    e.preventDefault();
    // Smooth scroll to section if it exists
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-purple-500/30 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-200 text-sm mb-4 md:mb-0">
            © 2024 Brain Blast Quiz. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <button 
              onClick={(e) => handleClick(e, 'rules')}
              className="text-purple-200 hover:text-pink-400 transition-colors text-sm"
            >
              Quiz Rules
            </button>
            <button 
              onClick={(e) => handleClick(e, 'privacy')}
              className="text-purple-200 hover:text-pink-400 transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <button 
              onClick={(e) => handleClick(e, 'contact')}
              className="text-purple-200 hover:text-pink-400 transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;