import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({ message: "", type: "", visible: false });

  const SERVICE_ID = "service_7v8s21k";
  const TEMPLATE_ID = "template_46c08df";
  const PUBLIC_KEY = "gm1dCMvdI7FxHCh7N";

  useEffect(() => {
    if (notification.message) {
      setNotification((prev) => ({ ...prev, visible: true }));
      const timer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
        setTimeout(() => setNotification({ message: "", type: "", visible: false }), 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setNotification({ message: "Message Sent Successfully!", type: "success", visible: true });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setNotification({ message: "Oops! Something went wrong. Please try again.", type: "error", visible: true });
      });
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <motion.h2
          className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        {notification.message && (
          <motion.div
            className={`mb-4 p-3 text-center rounded text-white transition-opacity duration-500 ${
              notification.visible ? "opacity-100" : "opacity-0"
            } ${notification.type === "success" ? "bg-green-500" : "bg-red-500"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {notification.message}
          </motion.div>
        )}
        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};
