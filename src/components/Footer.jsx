import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto p-6 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Logo</h2>
          <p className="text-sm text-gray-600 mb-2">Address:</p>
          <p className="text-sm text-gray-600 mb-4">Level 1, 12 Sample St, Sydney NSW 2000</p>
          <p className="text-sm text-gray-600 mb-4">Contact:</p>
          <p className="text-sm text-gray-600 mb-4">1800 123 4567 info@example.com.au</p>
          <div className="flex space-x-4">
            <Facebook size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
            <Youtube size={20} />
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <ul className="space-y-2">
            {['Link One', 'Link Two', 'Link Three', 'Link Four', 'Link Five'].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-blue-600 hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <ul className="space-y-2">
            {['Link Six', 'Link Seven', 'Link Eight', 'Link Nine', 'Link Ten'].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-orange-600 hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright and Policy Links */}
      <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 mb-2 md:mb-0">© 2024 [Company]. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-600 hover:underline">Terms of Service</a>
          <a href="#" className="text-sm text-gray-600 hover:underline">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;