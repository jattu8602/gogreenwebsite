export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-4">🌱 GoGreen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your AI-powered companion for eco-friendly travel adventures
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Plan Sustainable Journeys, Reduce Your Carbon Footprint
          </h2>

          {/* Download Button */}
          <div className="mb-12">
            <a
              href="https://github.com/jattu8602/gogreenwebsite/releases/download/gogreen/GoGreen.apk"
              download="gogreen.apk"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Interactive Map */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🗺️</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Interactive Map
              </h4>
              <p className="text-gray-600 text-sm">
                Find the most eco-friendly routes based on real-time traffic
                conditions
              </p>
            </div>

            {/* Points of Interest */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Eco Points of Interest
              </h4>
              <p className="text-gray-600 text-sm">
                Discover sustainable hotels, museums, parks, and attractions
                along your route
              </p>
            </div>

            {/* AI Travel Planner */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                AI Travel Planner
              </h4>
              <p className="text-gray-600 text-sm">
                Get personalized eco-friendly travel plans powered by Google's
                Gemini AI
              </p>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Leaderboard
              </h4>
              <p className="text-gray-600 text-sm">
                Track achievements and compete with other eco-conscious
                travelers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Planner Details */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🧠 AI-Powered Travel Planning
          </h3>

          <div className="space-y-4 text-gray-600">
            <p className="text-center mb-6">
              Our Travel Planner uses Google's Gemini AI to create personalized
              eco-friendly travel experiences
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  What You Get:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Day-by-day itinerary
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Eco-friendly transportation options
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Sustainable accommodation recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Local sustainable food options
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Environmental Impact:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">🌱</span>
                    CO₂ emissions tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">🌱</span>
                    Carbon footprint reduction tips
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">🌱</span>
                    Comparison with conventional travel
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">🌱</span>
                    Destination-specific eco tips
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            How to Use the Travel Planner
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl mb-4">1️⃣</div>
              <h4 className="font-semibold text-gray-800 mb-2">Open the App</h4>
              <p className="text-gray-600 text-sm">
                Navigate to the "Travel Planner" tab
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl mb-4">2️⃣</div>
              <h4 className="font-semibold text-gray-800 mb-2">Tell the AI</h4>
              <p className="text-gray-600 text-sm">
                Share your destination and trip duration
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl mb-4">3️⃣</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Get Your Plan
              </h4>
              <p className="text-gray-600 text-sm">
                Receive a detailed eco-friendly itinerary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-4">
            🌍 Travel Responsibly, Travel Smart
          </h3>
          <p className="text-gray-300 mb-6">
            Join thousands of eco-conscious travelers making a positive impact
            on our planet
          </p>

          <a
            href="https://github.com/jattu8602/gogreenwebsite/releases/download/gogreen/GoGreen.apk"
            download="gogreen.apk"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download GoGreen Now
          </a>

          <div className="mt-8 text-gray-400 text-sm">
            <p>
              &copy; 2024 GoGreen. Making travel sustainable, one trip at a
              time.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
