import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Inline stub components so Vercel can build without extra files ---
const Card = ({ children, className }) => <div className={className}>{children}</div>;
const CardContent = ({ children, className }) => <div className={className}>{children}</div>;
const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>{children}</button>
);
const Input = (props) => <input className="border rounded px-3 py-2 w-full" {...props} />;

// --- Your original FoodPlatformShowcase component ---
export default function FoodPlatformShowcase() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", requirement: "" });

  const steps = [
    {
      title: "Company Reaches Out",
      description:
        "Organizations contact us when they need daily meal arrangements for employees.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    },
    {
      title: "We Analyze Requirement",
      description:
        "We understand headcount, meal types, budget and delivery locations.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
      title: "Vendor Matching",
      description:
        "We find the best suitable food vendors from our network.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      title: "Meal Arrangement Setup",
      description:
        "We help finalize vendor and assist in starting daily meal supply.",
      image:
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    },
  ];

  const quotes = [
    "Good food keeps employees happy and productive.",
    "Healthy teams start with healthy meals.",
    "Great workplaces invest in great food.",
    "Daily meals made simple for companies.",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request Submitted Successfully. Our team will contact you.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative h-[420px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Corporate Food Vendor Finder
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            We help companies arrange daily meals by connecting them with trusted food vendors.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          How We Help Companies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition">
                <img src={step.image} className="h-40 w-full object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote Scroll Section */}
      <div className="bg-orange-500 py-10 overflow-hidden">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] text-white text-xl font-semibold">
          {quotes.map((q, i) => (
            <span key={i} className="mx-16">
              {q}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-10">
        <Card className="max-w-xl mx-auto rounded-2xl shadow-xl border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Request Food Vendor Arrangement
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Company Name"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
              />

              <Input
                placeholder="Contact Person Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <Input
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <Input
                placeholder="Email ID"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <Input
                placeholder="Requirement (e.g., 200 Lunch Meals Daily)"
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                required
              />

              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 Corporate Food Vendor Finder Platform</p>
      </div>
    </div>
  );
}
