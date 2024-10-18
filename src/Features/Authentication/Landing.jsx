/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"; // Animation library
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-darkGray min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Learn. Grow. Succeed.
          </h1>
          <p className="text-lg text-gray-300">
            Enroll in high-quality courses from top instructors and transform
            your career with new skills—anytime, anywhere.
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
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&q=80&w=1528&auto=format&fit=crop"
            alt="Learning platform"
            className="rounded-xl shadow-xl h-[600px]"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Learned?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Top-Quality Courses", "Flexible Learning", "Lifetime Access"].map(
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
                    {`Enjoy ${feature.toLowerCase()} to advance your career.`}
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
          What Our Learners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "“The best platform to upskill! I landed my dream job after completing a coding course.”",
            "“Flexible learning at its best. I can study at my pace, and the instructors are top-notch.”",
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <p className="text-lg italic">"{testimonial}"</p>
              <span className="block mt-2 text-sm text-gray-400">
                - Happy Learner
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="px-8 py-16 bg-blue-600">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Start Learning Today</h2>
          <p className="mt-4 text-lg text-gray-100">
            Sign up now and unlock thousands of courses at your fingertips.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block px-8 py-4 bg-white text-blue-600 rounded-md text-lg hover:bg-gray-200 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Learned. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
