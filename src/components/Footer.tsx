import React from 'react';
import { Link } from 'react-router-dom';
import { Grid3X3, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Star, Shield, Award, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    categories: [
      { name: 'React Projects', href: '/projects?category=react' },
      { name: 'Java Projects', href: '/projects?category=java' },
      { name: 'Python Projects', href: '/projects?category=python' },
      { name: 'PHP Projects', href: '/projects?category=php' },
      { name: 'Mobile Apps', href: '/projects?category=mobile' },
      { name: 'Node.js Projects', href: '/projects?category=nodejs' }
    ],
    about: [
      { name: 'How it Works', href: '/how-it-works' },
      { name: 'Trust & Safety', href: '/trust-safety' },
      { name: 'Quality Guide', href: '/quality-guide' },
      { name: 'StudyStack Pro', href: '/pro' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Press & News', href: '/press' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Seller Resources', href: '/seller-resources' },
      { name: 'Buyer Guide', href: '/buyer-guide' },
      { name: 'Community Forum', href: '/forum' },
      { name: 'Report Issues', href: '/report' }
    ],
    community: [
      { name: 'Student Blog', href: '/blog' },
      { name: 'Events & Webinars', href: '/events' },
      { name: 'Affiliate Program', href: '/affiliates' },
      { name: 'Referral Program', href: '/referrals' },
      { name: 'Developer API', href: '/api' },
      { name: 'Partnerships', href: '/partnerships' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/studystack' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/studystack' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/studystack' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/studystack' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/studystack' }
  ];

  const trustIndicators = [
    { icon: Shield, text: 'Secure Payments', subtext: 'SSL Protected' },
    { icon: Award, text: 'Quality Guaranteed', subtext: '100% Satisfaction' },
    { icon: Clock, text: '24/7 Support', subtext: 'Always Here to Help' },
    { icon: Star, text: '4.9/5 Rating', subtext: 'From 10k+ Students' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Grid3X3 className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">StudyStack</span>
              </Link>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                The world's largest marketplace for student academic projects. Connect with talented students and accelerate your learning journey.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200">support@studystack.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-blue-200 text-sm">
                © {currentYear} StudyStack. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-blue-200 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-blue-200 hover:text-white transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;