'use client';
import { Navbar } from '../_components/navbar';

const DashboardPage = () => {
  return (
    <div className="flex h-screen ">
        <Navbar />
      <div className="overflow-y-auto p-4 space-y-12">
      <section className="relative bg-white flex items-center justify-center text-center min-h-[60vh]">
  <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
    {/* Animated Background Circles */}
    <div className="relative w-full h-full">
      <div className="absolute bg-yellow-400 h-32 w-32 rounded-full top-16 left-16 animate-bounce"></div>
      <div className="absolute bg-blue-500 h-40 w-40 rounded-full top-40 left-32 animate-bounce"></div>
      <div className="absolute bg-orange-500 h-48 w-48 rounded-full top-24 right-16 animate-bounce"></div>
    </div>
  </div>

  <div className="relative z-10 text-center text-gray-900 px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
      Welcome to <span className="font-bold">Destion</span>
    </h2>
    <h1 className="text-4xl md:text-6xl font-bold uppercase">
      We’re a Creative Agency
    </h1>
    <div className="mt-8 space-x-4">
      <button className="px-6 py-3 bg-gray-600 text-white rounded-md  transition duration-300 transform hover:scale-105">
        Get Started
      </button>
    </div>
  </div>
</section>
        {/* About Us Section */}
        <section className="text-center py-16 bg-gray-50">
  <h1 className="text-4xl font-bold text-gray-900 mb-8">
    Learn More <span className="text-pink-600">About Us</span>
  </h1>
  <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
    We offer collaborative and empowering software solutions that enable you to expand your reach and explore new opportunities.
  </p>

  <div className="flex flex-col md:flex-row justify-center mt-12 space-y-8 md:space-y-0 md:space-x-12 px-4">
    <div className="text-left max-w-md space-y-6">
      <p className="text-gray-700">
        We are a digital transformation consultancy and software development company providing cutting-edge engineering solutions, helping companies and clients untangle complex issues in their digital evolution journey.
      </p>
      <ul className="space-y-2 text-pink-600">
        <li>✔️ Achieve Business Goals</li>
        <li>✔️ Maximize Timely Deliverables</li>
        <li>✔️ Accelerate Growth</li>
      </ul>
    </div>
    <div className="text-left max-w-md space-y-6">
      <p className="text-gray-700">
        We’re experts in software development with a proven track record. Our team follows a rigorous process for transparent and timely project delivery, staying up-to-date with the latest trends.
      </p>
      <button className="mt-8 px-6 py-3 border border-pink-600 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-105">
        Learn More
      </button>
    </div>
  </div>
</section>
        {/* Services Section */}
        <section className="text-center py-16">
  <h2 className="text-pink-600 font-semibold">SERVICES</h2>
  <h2 className="text-3xl font-bold text-gray-900 mt-4">
    We Offer Awesome <span className="text-pink-600">Services</span>
  </h2>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
    {/* Service Card */}
    {[
      { icon: '💼', title: 'FinTech Development Services', desc: 'Comprehensive FinTech development to help businesses stay ahead of the financial landscape.' },
      { icon: '🩺', title: 'Healthcare Development Services', desc: 'Top-notch services to improve patient outcomes and operational efficiency.' },
      { icon: '📱', title: 'Consumer Development Services', desc: 'Innovative services to build engaging digital products and experiences.' },
      { icon: '💰', title: 'Financial Services Development', desc: 'Customized financial services to meet the needs of businesses and their clients.' },
    ].map(({ icon, title, desc }, index) => (
      <div key={index} className="border p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-pink-600 text-4xl mb-4">{icon}</div>
        <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-700">{desc}</p>
      </div>
    ))}
  </div>
</section>

        {/* Contact Section */}
        <section className="text-center py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-gray-900">
    Reach Out and Let Us <span className="text-pink-600">Chat</span>
  </h2>
  <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
    Meet our client success specialist. We’d love to hear from you if you are looking for a company that will develop your product. But don’t worry, sending an inquiry via the form is not binding.
  </p>
  <button className="mt-8 px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105">
    Contact Us
  </button>
</section>

      </div>
    </div>
  );
};

export default DashboardPage;