import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 py-8 px-6">
        {/* Column 1 - Branding */}
        <div>
          <h3 className="text-xl font-bold text-blue-600">Realty</h3>
          <p className="text-sm text-gray-600 mt-2">
            Helping you find your dream home with ease.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className=" space-y-2 text-gray-600">
            <li>
              <Link href="/listings" className="hover:text-blue-600">
                Listings
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-gray-600 mt-2">📍 Bihar, India</p>
          <p className="text-gray-600">📞 +91 8789432870</p>
          <p className="text-gray-600">✉️ rishavraj7016@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t  text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Realty. All rights reserved.
      </div>
    </footer>
  );
}
