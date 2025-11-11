export default function Page() {
    async function submitForm(formData) {
        "use server";
        const fromFields={
            email: formData.get("email"),
            message:formData.get("message")
        };
        console.log("formFields",fromFields);
        console.log("Todo send these fields to the backend");
        return fromFields;
        
    }
  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Thank You for Choosing Us
      </h1>
      <p className="text-center text-gray-600 mb-6">
        We’d love to hear from you! Please fill out the form below.
      </p>

      <form  className="space-y-5" action={submitForm}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="4"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
