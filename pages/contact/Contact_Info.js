export default function Contact_Info() {
  return (
    <div className="w-full mx-auto p-6 bg-white border border-gray rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-tealBlue mb-4">
        How to Reach Us
      </h2>
      <ul className="list-disc pl-6 text-darkGreen mb-6">
        <li>
          Fill out the form below, and we'll get back to you as soon as
          possible.
        </li>
        <li>
          Email us directly at{" "}
          <a
            href="mailto:well4wardsetup@gmail.com"
            className="text-blue-600 hover:underline"
          >
            well4wardsetup@gmail.com
          </a>
          .
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-tealBlue mb-4">
        We're Here to Help!
      </h2>
      <ul className="list-disc pl-6 text-darkGreen mb-6">
        <li>
          <strong>General Inquiries:</strong> Have a question? Let us know, and
          we'll point you in the right direction.
        </li>
        <li>
          <strong>Support:</strong> Need assistance with a product or service?
          We're here to help resolve any issues.
        </li>
        <li>
          <strong>Feedback:</strong> Your input helps us improve! Share your
          thoughts, suggestions, or experiences.
        </li>
        <li>
          <strong>Collaborations:</strong> Interested in working together? We're
          always open to new opportunities.
        </li>
      </ul>
      <p className="text-darkGreen">
        Thank you for connecting with us. We value your time and appreciate your
        interest!
      </p>
    </div>
  );
}
