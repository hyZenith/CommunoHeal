import { Phone, Calendar, FileText, Video } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="CommunoHeal Logo" className="mr-2 w-20 h-15" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/about" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>
          <a href="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </a>
          <a href="/register" className="px-4 py-2 text-white rounded-full bg-emerald-500 hover:bg-emerald-600">
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-teal-100 rounded-br-[300px]"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-4/5 bg-teal-50 rounded-tl-[200px]"></div>

        <div className="container relative z-10 flex flex-col md:flex-row items-center px-6 py-16 mx-auto">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-teal-600">COMMUNOHEAL</h1>
            <p className="mt-4 text-xl text-gray-700">
              Bridging Healthcare Gaps,
              <br />
              One Connection at a Time
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/doctor-illustration.png" alt="Healthcare Professional" className="mx-auto w-[500px] h-[400px]" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto">
          <div className="p-4 mb-8 text-right bg-teal-100 rounded-full">
            <h2 className="text-xl font-semibold text-teal-800">OUR SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <div className="p-6 text-center bg-teal-50 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-teal-200 rounded-full">
                <Video className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-teal-700">Video Consultations</h3>
              <p className="text-sm text-gray-600">
                Connect with doctors virtually through video calls with AI-powered translation.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 text-center bg-teal-50 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-teal-200 rounded-full">
                <Calendar className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-teal-700">Schedule Appointments</h3>
              <p className="text-sm text-gray-600">Book monthly check-ups with your preferred healthcare provider.</p>
            </div>

            {/* Service 3 */}
            <div className="p-6 text-center bg-teal-50 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-teal-200 rounded-full">
                <FileText className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-teal-700">Digital Prescriptions & Test Results</h3>
              <p className="text-sm text-gray-600">
                Access and manage your prescriptions and test results digitally in one place.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-6 text-center bg-teal-50 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-teal-200 rounded-full">
                <Phone className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-teal-700">Emergency Support</h3>
              <p className="text-sm text-gray-600">24/7 emergency support with immediate response from doctors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-teal-50">
        <div className="container px-6 mx-auto">
          <div className="p-4 mb-8 text-center bg-teal-100 rounded-full">
            <h2 className="text-xl font-semibold text-teal-800">OUR PARTNERS</h2>
          </div>

          <div className="relative p-6 bg-white rounded-lg">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg shadow-md">
                  <img src={`/hospital-${i}.png`} alt={`Partner Hospital ${i}`} className="object-cover w-full h-32" />
                </div>
              ))}
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 rounded-full flex items-center justify-center">
              <div className="text-center text-teal-800 text-lg font-semibold">COMMUNOHEAL</div>
            </div>
          </div>

          <p className="mt-16 text-center text-sm text-gray-600">
            Leading healthcare institutions working together for better community health.
            <br />
            Would you be a part of this movement? Join us and bring healthcare where it's needed most!
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-white">
        <div className="container px-6 mx-auto">
          <div className="p-4 mb-8 text-left bg-teal-100 rounded-full">
            <h2 className="text-xl font-semibold text-teal-800">ABOUT US</h2>
          </div>

          {/* Content will go here */}
        </div>
      </section>
    </div>
  )
}

export default App

