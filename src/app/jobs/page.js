export default function JobsPage() {
    return (
      <div className="min-h-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
            Jobs & Internships
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exciting career opportunities from our network of alumni and partner companies.
          </p>
        </div>

        {/* Job Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
            />
            <button className="absolute inset-y-0 right-0 px-6 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-r-2xl font-semibold hover:from-indigo-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Find Jobs
            </button>
          </div>
        </div>

        {/* Job Categories */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Technology', icon: '💻', count: '45' },
              { name: 'Business', icon: '💼', count: '32' },
              { name: 'Engineering', icon: '⚙️', count: '28' },
              { name: 'Design', icon: '🎨', count: '19' }
            ].map((category, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-100 cursor-pointer group hover:scale-105">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-indigo-600 font-medium">{category.count} jobs</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Opportunities</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Senior Software Engineer',
                company: 'TechCorp Bangladesh',
                location: 'Dhaka, Bangladesh',
                type: 'Full-time',
                salary: '৳ 30,000 - ৳ 50,000',
                logo: 'TC'
              },
              {
                title: 'Marketing Manager',
                company: 'Global Solutions Ltd',
                location: 'Chittagong, Bangladesh',
                type: 'Full-time',
                salary: '৳ 25,000 - ৳ 40,000',
                logo: 'GS'
              },
              {
                title: 'UI/UX Designer',
                company: 'Creative Studio',
                location: 'Sylhet, Bangladesh',
                type: 'Contract',
                salary: '৳ 20,000 - ৳ 35,000',
                logo: 'CS'
              }
            ].map((job, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-1">{job.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="text-indigo-600 font-medium">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200 font-medium">
                      Save
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 font-medium">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  