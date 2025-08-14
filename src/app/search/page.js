export default function SearchPage() {
    return (
      <div className="min-h-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
            Search Alumni
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow alumni and students. Find people by name, graduation year, or field of study.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name, graduation year, or field..."
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
            />
            <button className="absolute inset-y-0 right-0 px-6 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-r-2xl font-semibold hover:from-indigo-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* Search Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
              Advanced Filters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80">
                <option>All Graduation Years</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
              <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80">
                <option>All Fields</option>
                <option>Computer Science</option>
                <option>Engineering</option>
                <option>Business</option>
                <option>Arts</option>
              </select>
              <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80">
                <option>All Locations</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Sylhet</option>
                <option>International</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sample Results */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Searches</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    AS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ahmed Sarker</h4>
                    <p className="text-gray-600">Computer Science • 2023</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 font-medium">
                  Connect
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    FK
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fatima Khan</h4>
                    <p className="text-gray-600">Business Administration • 2022</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 font-medium">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  