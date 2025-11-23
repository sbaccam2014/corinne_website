import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionDivider from "./SectionDivider";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone) &&
      formData.message.trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xzzwkglr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const formatPhoneNumber = (value) => {
    const phone = value.replace(/\D/g, '');
    if (phone.length < 4) return phone;
    if (phone.length < 7) return `(${phone.slice(0, 3)})-${phone.slice(3)}`;
    return `(${phone.slice(0, 3)})-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      setFormData({
        ...formData,
        phone: formatPhoneNumber(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24" style={{backgroundColor: '#F9F8FF'}}>
      <SectionDivider color="lavender" direction="down" variant={2} />
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-nunito text-4xl md:text-5xl font-normal" style={{color: '#9370DB'}}>
              Get In Touch
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
              Ready to take the first step? Reach out today for a free 15-minute consultation.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
          {/* Left: Contact Info */}
          <FadeIn delay={0.05}>
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{color: '#9CAF88'}}>
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6" style={{color: '#9370DB'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <a href="tel:+15088685555" className="text-slate-600 hover:underline">
                      (508) 868-5555
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Available for calls and text</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6" style={{color: '#9370DB'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <a href="mailto:csbaccam@gmail.com" className="text-slate-600 hover:underline">
                      csbaccam@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-1">I typically respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6" style={{color: '#9370DB'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Office Location</div>
                    <p className="text-slate-600">14 Church Street<br/>Hopkinton, MA 01748</p>
                    <p className="text-xs text-slate-500 mt-1">In-person and telehealth available</p>
                  </div>
                </div>
              </div>

              {/* Insurance & Payment */}
              <div className="mt-8 p-4 rounded-lg" style={{backgroundColor: '#F9F8FF'}}>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <svg className="w-5 h-5" style={{color: '#9370DB'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="font-semibold text-slate-700">Insurance & Payment</span>
                </div>
                <ul className="text-xs text-slate-600 ml-7 space-y-1">
                  <li>• Private pay accepted</li>
                  <li>• Out-of-network provider</li>
                  <li>• Superbills provided for reimbursement</li>
                  <li>• HSA/FSA eligible</li>
                </ul>
              </div>

              {/* Privacy Badge */}
              <div className="mt-4 p-4 rounded-lg" style={{backgroundColor: 'rgba(156, 175, 136, 0.1)'}}>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" style={{color: '#9CAF88'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-slate-700">Your privacy is protected</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 ml-7">All communications are confidential</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Contact Form */}
          <FadeIn delay={0.1}>
            <div className="rounded-xl p-8" style={{backgroundColor: '#F5F5F5'}}>
              <h3 className="text-xl font-semibold mb-6 text-slate-900">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent text-sm ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent text-sm ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(888)-888-8888"
                    className={`w-full px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent text-sm ${errors.phone ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    How can I help you? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent text-sm resize-none ${errors.message ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || !isFormValid()}
                  className="w-full rounded-md px-6 py-3 text-white text-sm font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{backgroundColor: '#9CAF88'}}
                >
                  {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {status === "success" && (
                  <div className="p-3 rounded-md bg-green-50 text-green-700 text-sm text-center">
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm text-center">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to be contacted about your inquiry.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
