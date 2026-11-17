
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Users,
  User,
  CheckCircle2,
  ArrowRight,
  Crown,
  MessageSquare,
  CreditCard,
} from "lucide-react";

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  eventType: "",
  hall: "",
  eventDate: "",
  eventTime: "",
  guests: "",
  package: "",
  paymentMethod: "",
  message: "",
};

const Booking = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      ...formData,
      bookingId: `AJW-${Date.now()}`,
      bookingStatus: "Pending",
      paymentStatus: "Pending",
      submittedAt: new Date().toISOString(),
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("ajwaBookings") || "[]"
    );

    existingBookings.push(newBooking);

    localStorage.setItem(
      "ajwaBookings",
      JSON.stringify(existingBookings)
    );

    setBookingDetails(newBooking);
    setSubmitted(true);

    console.log("Booking Details:", newBooking);
  };

  const inputStyle =
    "w-full bg-[#faf8f3] border border-[#e5dfd2] px-4 py-4 outline-none focus:border-[#b99753] transition text-sm text-[#252019] placeholder:text-gray-400";

  const labelStyle =
    "block text-sm font-semibold text-[#30291f] mb-2";

  return (
    <div className="bg-[#faf8f3] text-[#252019]">

      {/* Hero */}
      <section className="relative h-[430px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800"
          alt="Wedding celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#120e09]/80" />

        <div className="relative text-center px-6 max-w-3xl">
          <p className="text-[#e3c581] uppercase tracking-[4px] text-xs">
            Reserve Your Special Day
          </p>

          <h1 className="text-5xl md:text-7xl font-serif text-white mt-6">
            Event <span className="text-[#e3c581] italic">Booking</span>
          </h1>

          <p className="text-gray-300 mt-6 leading-8">
            Let's make your celebration extraordinary.
            Share your event details with us.
          </p>

          <div className="flex justify-center items-center gap-3 mt-7 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#e3c581]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#e3c581]">Booking</span>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_360px] gap-10">

          {/* Form */}
          <div className="bg-white shadow-sm border border-[#eee7da]">

            <div className="bg-[#17140f] p-8 md:p-10">
              <div className="flex items-center gap-3">
                <Crown className="text-[#d5b36a]" size={27} />
                <span className="text-[#d5b36a] uppercase tracking-[3px] text-xs">
                  Ajwa Reservation
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl text-white font-serif mt-5">
                Book Your Celebration
              </h2>

              <p className="text-gray-400 mt-3 text-sm leading-7">
                Complete the form below. Our team can review your
                booking request and contact you.
              </p>
            </div>

            {submitted ? (
              <div className="p-10 md:p-16 text-center">
                <CheckCircle2
                  size={65}
                  className="text-[#b99753] mx-auto"
                />

                <h2 className="text-3xl font-serif mt-7">
                  Request Submitted!
                </h2>

                <p className="text-gray-500 mt-4 leading-7">
                  Your booking request has been saved successfully.
                  Our management team will review your reservation.
                </p>

                {bookingDetails && (
                  <div className="max-w-md mx-auto mt-8 bg-[#faf8f3] border border-[#e5dfd2] p-6 text-left space-y-3">
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500 text-sm">Booking ID</span>
                      <span className="font-semibold text-sm">
                        {bookingDetails.bookingId}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500 text-sm">Payment Method</span>
                      <span className="font-semibold text-sm">
                        {bookingDetails.paymentMethod}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500 text-sm">Payment Status</span>
                      <span className="text-[#a27d3b] font-semibold text-sm">
                        Pending
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500 text-sm">Booking Status</span>
                      <span className="text-[#a27d3b] font-semibold text-sm">
                        Pending
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                    setBookingDetails(null);
                  }}
                  className="mt-8 bg-[#17140f] text-white px-8 py-4 rounded-full hover:bg-[#b99753] transition"
                >
                  Create Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-7 md:p-10">

                {/* Personal Information */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-7">
                    <User className="text-[#b99753]" size={22} />
                    <h3 className="text-2xl font-serif">
                      Personal Information
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={inputStyle}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03XX XXXXXXX"
                        className={inputStyle}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className={inputStyle}
                      />
                    </div>

                  </div>
                </div>

                <div className="border-t border-gray-200 my-9" />

                {/* Event Details */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-7">
                    <CalendarDays className="text-[#b99753]" size={22} />
                    <h3 className="text-2xl font-serif">
                      Event Details
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className={labelStyle}>Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                      >
                        <option value="">Select Event</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Mehndi">Mehndi</option>
                        <option value="Barat">Barat</option>
                        <option value="Walima">Walima</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelStyle}>Select Hall *</label>
                      <select
                        name="hall"
                        value={formData.hall}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                      >
                        <option value="">Choose a Hall</option>
                        <option value="Royal Grand Hall">Royal Grand Hall</option>
                        <option value="Crystal Banquet Hall">Crystal Banquet Hall</option>
                        <option value="Luxury Marquee">Luxury Marquee</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelStyle}>Event Date *</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={inputStyle}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Event Time *</label>
                      <select
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleChange}
                        className={inputStyle}
                        required
                      >
                        <option value="">Select Time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        <option value="Night">Night</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelStyle}>Expected Guests *</label>
                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        placeholder="Enter number of guests"
                        className={inputStyle}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Select Package</label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className={inputStyle}
                      >
                        <option value="">Choose Package</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Customized">Customized</option>
                      </select>
                    </div>

                  </div>
                </div>

                <div className="border-t border-gray-200 my-9" />

                {/* Payment Method */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-7">
                    <CreditCard className="text-[#b99753]" size={22} />
                    <h3 className="text-2xl font-serif">
                      Payment Method
                    </h3>
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Select Your Payment Method *
                    </label>

                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    >
                      <option value="">Choose Payment Method</option>
                      <option value="Cash at Hall">Cash at Hall</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="JazzCash">JazzCash</option>
                      <option value="EasyPaisa">EasyPaisa</option>
                    </select>
                  </div>

                  {formData.paymentMethod && (
                    <div className="mt-5 bg-[#faf8f3] border border-[#e5dfd2] p-5">
                      <h4 className="font-semibold text-[#30291f]">
                        {formData.paymentMethod}
                      </h4>

                      <p className="text-sm text-gray-500 mt-2 leading-6">
                        {formData.paymentMethod === "Cash at Hall"
                          ? "You can pay at the marriage hall. Your payment will remain pending until management confirms it."
                          : "After submitting your booking, our management team will provide the official payment details and verify your payment."}
                      </p>

                      <p className="text-xs text-[#a27d3b] mt-3">
                        Payment Status: Pending Verification
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 my-9" />

                {/* Additional Message */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="text-[#b99753]" size={22} />
                    <h3 className="text-2xl font-serif">
                      Additional Information
                    </h3>
                  </div>

                  <label className={labelStyle}>
                    Special Requests
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your decoration preferences or any special requirements..."
                    className={`${inputStyle} resize-none`}
                  />

                </div>

                <button
                  type="submit"
                  className="w-full mt-9 bg-[#b99753] hover:bg-[#17140f] text-white py-5 rounded-full font-semibold flex items-center justify-center gap-3 transition duration-300"
                >
                  Submit Booking Request
                  <ArrowRight size={19} />
                </button>

                <p className="text-xs text-gray-400 text-center mt-5">
                  Submitting this form does not confirm a reservation
                  or complete a payment. Final availability and payment
                  require management approval.
                </p>

              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-7">

            <div className="bg-[#17140f] text-white p-8">
              <Crown size={32} className="text-[#d5b36a]" />

              <h3 className="text-2xl font-serif mt-5">
                Make Your Day Special
              </h3>

              <p className="text-gray-400 text-sm leading-7 mt-4">
                Share your event details and let our team help
                you plan a beautiful celebration.
              </p>

              <div className="border-t border-white/20 mt-7 pt-7 space-y-6">

                <div className="flex gap-4">
                  <CalendarDays className="text-[#d5b36a] shrink-0" />
                  <div>
                    <h4 className="font-semibold">Choose Your Date</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Select your preferred event date.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="text-[#d5b36a] shrink-0" />
                  <div>
                    <h4 className="font-semibold">Guest Arrangements</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Tell us your expected guest count.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#d5b36a] shrink-0" />
                  <div>
                    <h4 className="font-semibold">Booking Review</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Your request can be reviewed by management.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white border border-[#e8dfce] p-8">
              <h3 className="text-2xl font-serif">
                Need Assistance?
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-4">
                Have questions about your event or our available
                arrangements? Visit our contact page.
              </p>

              <Link
                to="/contact"
                className="flex items-center justify-between mt-6 text-[#a27d3b] font-semibold border-t border-gray-200 pt-5"
              >
                Contact Our Team <ArrowRight size={18} />
              </Link>
            </div>

          </aside>

        </div>
      </section>

    </div>
  );
};

export default Booking;
