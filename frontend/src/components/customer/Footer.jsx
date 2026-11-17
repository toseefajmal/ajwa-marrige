
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#faf8f3] min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#17140f] text-white py-24 px-5 text-center">
        <p className="text-[#d6b36a] uppercase tracking-[5px] text-sm mb-4">
          Get In Touch
        </p>

        <h1 className="text-4xl md:text-6xl font-serif">
          Contact <span className="text-[#d6b36a]">Us</span>
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mt-6 leading-7">
          We would love to help you plan your special day.
          Contact our team for bookings, packages and event details.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <p className="text-[#a17b35] uppercase tracking-[4px] text-xs font-semibold">
              Let's Talk
            </p>

            <h2 className="text-4xl font-serif text-[#17140f] mt-4">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-500 mt-5 leading-8">
              Whether you are planning a wedding, mehndi, barat or
              walima ceremony, our team is here to make your event
              memorable and beautiful.
            </p>

            <div className="mt-10 space-y-7">

              <div className="border-b border-[#e5dccb] pb-5">
                <h3 className="text-lg font-serif text-[#17140f]">
                  Our Location
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Ajwa Marriage Hall, Your Location
                </p>
              </div>

              <div className="border-b border-[#e5dccb] pb-5">
                <h3 className="text-lg font-serif text-[#17140f]">
                  Phone Number
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Contact Number
                </p>
              </div>

              <div className="border-b border-[#e5dccb] pb-5">
                <h3 className="text-lg font-serif text-[#17140f]">
                  Email Address
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Email Address
                </p>
              </div>

              <div className="pb-5">
                <h3 className="text-lg font-serif text-[#17140f]">
                  Business Hours
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Monday - Sunday: 10:00 AM - 10:00 PM
                </p>
              </div>

            </div>

            <Link
              to="/booking"
              className="inline-block mt-5 bg-[#17140f] text-[#d6b36a] px-8 py-4 text-sm tracking-wide hover:bg-[#a17b35] hover:text-white transition"
            >
              Book Your Event
            </Link>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-[#e8dfce] p-7 md:p-10 shadow-sm">

            <p className="text-[#a17b35] uppercase tracking-[4px] text-xs font-semibold">
              Send A Message
            </p>

            <h2 className="text-3xl font-serif text-[#17140f] mt-3 mb-8">
              Get In Touch With Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-[#e5dccb] bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99753]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-[#e5dccb] bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99753]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full border border-[#e5dccb] bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99753]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  required
                  className="w-full border border-[#e5dccb] bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99753]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  className="w-full border border-[#e5dccb] bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99753] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#17140f] text-[#d6b36a] py-4 uppercase tracking-[2px] text-sm hover:bg-[#a17b35] hover:text-white transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#eee8dc] py-14 px-5 text-center">
        <p className="text-[#a17b35] uppercase tracking-[4px] text-xs">
          Ajwa Marriage Hall
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-[#17140f] mt-4">
          Let's Make Your Day Special
        </h2>

        <p className="text-gray-500 mt-4">
          Your beautiful celebration starts with a conversation.
        </p>
      </section>

    </div>
  );
};

export default Contact;
