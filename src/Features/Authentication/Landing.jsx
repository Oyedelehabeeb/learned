/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"; // Animation library
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-darkGray min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-3xl font-bold tracking-wide">Learned</div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-blue-400">
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-blue-400">
              Pricing
            </Link>
          </li>
        </ul>
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Discover the Power of{" "}
            <span className="text-blue-400">Innovation</span>
          </h1>
          <p className="text-lg text-gray-300">
            Explore new possibilities and stay ahead with our state-of-the-art
            solutions.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 mt-4 bg-blue-600 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Get Started <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1728750002011-e81fc6a631a9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
            className="rounded-xl shadow-xl h-[600px]"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Fast Performance", "Secure Systems", "24/7 Support"].map(
            (feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="flex items-center space-x-4"
              >
                <FaCheckCircle className="text-blue-400 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">{feature}</h3>
                  <p className="text-gray-400">
                    Our {feature.toLowerCase()} makes us stand out.
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-16 bg-darkGray">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["Excellent Service!", "Outstanding Support!"].map(
            (testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-gray-800 rounded-lg"
              >
                <p className="text-lg">{testimonial}</p>
                <span className="block mt-2 text-sm text-gray-400">
                  - Satisfied Customer
                </span>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="px-8 py-16 bg-blue-600">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Join Us Today</h2>
          <p className="mt-4 text-lg text-gray-100">
            Sign up now and unlock new opportunities with our platform.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block px-8 py-4 bg-white text-blue-600 rounded-md text-lg hover:bg-gray-200 transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © 2024 MyBrand. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
