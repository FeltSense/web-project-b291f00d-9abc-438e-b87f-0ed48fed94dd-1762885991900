'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-gray-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Brand Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-bold mb-6">Include</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Comprehensive solutions designed to bring everyone into the conversation and drive meaningful results.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#facebook"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#twitter"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.614 9.96 9.96 0 01-2.833.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="#instagram"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.644.25 1.192.581 1.738 1.127.546.546.877 1.094 1.127 1.738.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427-.25.644-.581 1.192-1.127 1.738-.546.546-1.082.877-1.746 1.127-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465-.644-.25-1.192-.581-1.738-1.127-.546-.546-.877-1.082-1.127-1.746-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.644.581-1.192 1.127-1.738.546-.546 1.082-.877 1.746-1.127.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06zm0 5.838a5.162 5.162 0 100 10.324 5.162 5.162 0 000-10.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.846-10.354a1.207 1.207 0 11-2.414 0 1.207 1.207 0 012.414 0z" />
            </svg>
          </a>
          <a
            href="#linkedin"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.422-.103.249-.129.597-.129.946v5.437h-3.554s.05-8.81 0-9.728h3.554v1.375c.425-.655 1.185-1.586 2.882-1.586 2.105 0 3.685 1.375 3.685 4.331v5.608zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.957.768-1.71 1.958-1.71 1.188 0 1.914.753 1.939 1.71 0 .951-.751 1.71-1.982 1.71zm1.581 11.597H3.748V9.579h3.17v10.873zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
        <ul className="space-y-2">
          <li>
            <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Consulting
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Strategy
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Implementation
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Support
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Training
            </a>
          </li>
        </ul>
      </div>

      {/* Company Section */}
      <div>
        <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="#privacy" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h4 className="text-white text-lg font-semibold mb-6">Get in Touch</h4>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-gray-400 mb-1">Email</p>
            <a href="mailto:hello@include.com" className="text-teal-400 hover:text-teal-300 transition-colors duration-200">
              hello@include.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Phone</p>
            <a href="tel:+1234567890" className="text-teal-400 hover:text-teal-300 transition-colors duration-200">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Address</p>
            <p className="text-gray-300">
              123 Innovation Street<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 mt-12 pt-8">
      {/* Copyright */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 Include. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Designed to bring everyone in.
        </p>
      </div>
    </div>
  </div>
</footer>
  );
}