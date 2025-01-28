import Button_Solid from "@/components/buttons/Button_Solid";
import Card_Page_Title from "@/components/cards/Card_Main_Page_Title";
import { useState } from "react";
import Contact from "./Contact_Info";
import Contact_Info from "./Contact_Info";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const categories = ["General Inquiry", "Support", "Feedback", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/emailHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      console.log(response);
      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-max bg-first items-center flex flex-col justify-center p-6 ">
      <Card_Page_Title
        title="Contact Us"
        description=" We'd love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out to us."
      />
      <div className="py-4 w-full">
        <Contact_Info />
      </div>
      <form
        className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 h-24"
          />
        </div>
        <Button_Solid children="Send" type="submit" />
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
  );
}

const data = {
  card_page_title: {
    title: "Contact Us",
    subtitle:
      "We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.",
    description:
      "Well4ward is always looking to build the community and we want to hear what you have to say. Whether its cause you have question or you want to know how to get involved, just fill out the contact page and we will get back to you as soon as possible.",
    className: "my-4 w-full max-w-lg",
  },
};
