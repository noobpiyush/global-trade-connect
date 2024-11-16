import {
  ArrowRight,
  FileText,
  Globe,
  MessageSquare,
  ShipIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 ">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-600" />
          <span className="text-sm sm:text-2xl font-bold text-blue-800">
            Global Trade Connnect
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/sign-up" className="text-blue-800 hover:text-blue-600">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/sign-in" className="text-blue-800 hover:text-blue-600">
                Signin
              </Link>
            </li>
            <li>
              <Link to="/" className="text-blue-800 hover:text-blue-600">
                Features
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-blue-800 mb-4">
            Streamline Your Global Goods Export Business
          </h1>
          <p className="text-lg sm:text-xl text-blue-700 mb-8">
            Manage shipments, documents, and communications all in one place
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-black">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        <section id="features" className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ShipIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Simplified Shipping
            </h2>
            <p className="text-blue-700">
              Coordinate with multiple carriers and track shipments in
              real-time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FileText className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Document Management
            </h2>
            <p className="text-blue-700">
              Easily manage and share all your export documents in one secure
              place.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Real-time Communication
            </h2>
            <p className="text-blue-700">
              Stay connected with carriers, customers, and regulatory bodies.
            </p>
          </div>
        </section>

        <section id="about" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            About FreshFruits Global
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            We're dedicated to helping Indian SMBs like FreshFruits Ltd.
            overcome the challenges of global fruit export. Our platform
            simplifies complex processes, ensuring your delicious fruits reach
            customers worldwide efficiently and safely.
          </p>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-blue-700 mb-6">
            Have questions? We're here to help!
          </p>
          <Button size="lg">Contact Us</Button>
        </section>
      </main>
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 FreshFruits Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
