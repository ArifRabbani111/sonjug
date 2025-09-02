export default function Profile() {
  return (
    <div className="min-h-full">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-400 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full p-2 shadow-2xl">
                <img
                  src="arif.jpg"
                  alt="Arif Rabbani"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Arif Rabbani</h1>
              <p className="text-xl text-indigo-100 mb-4">Software Engineer</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Graduation Year: 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Sylhet, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                  <span>TechCorp, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                Edit Profile
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - About & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Passionate software engineer with expertise in modern web technologies. 
                I love building scalable applications and solving complex problems. 
                Always eager to learn new technologies and contribute to innovative projects.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: 'React', level: 'Advanced', color: 'from-blue-500 to-blue-600' },
                  { name: 'Node.js', level: 'Advanced', color: 'from-green-500 to-green-600' },
                  { name: 'TypeScript', level: 'Intermediate', color: 'from-blue-600 to-blue-700' },
                  { name: 'MongoDB', level: 'Intermediate', color: 'from-green-600 to-green-700' },
                  { name: 'AWS', level: 'Intermediate', color: 'from-orange-500 to-orange-600' },
                  { name: 'Docker', level: 'Basic', color: 'from-blue-500 to-indigo-600' }
                ].map((skill, index) => (
                  <div key={index} className="bg-white/80 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`} style={{
                        width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                Experience
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    TC
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Software Engineer</h4>
                    <p className="text-indigo-600 font-medium">TechCorp Bangladesh</p>
                    <p className="text-gray-600 text-sm">Jan 2025 - Present</p>
                    <p className="text-gray-700 text-sm mt-2">
                      Developing scalable web applications using React and Node.js. 
                      Collaborating with cross-functional teams to deliver high-quality software solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Connections */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Profile Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="text-2xl font-bold text-indigo-600">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Connections</span>
                  <span className="text-2xl font-bold text-green-600">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Posts</span>
                  <span className="text-2xl font-bold text-purple-600">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Endorsements</span>
                  <span className="text-2xl font-bold text-orange-600">156</span>
                </div>
              </div>
            </div>

            {/* Recent Connections */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Connections</h3>
              <div className="space-y-3">
                {[
                  { name: 'Ahmed Sarker', avatar: 'AS', online: true },
                  { name: 'Fatima Khan', avatar: 'FK', online: false },
                  { name: 'Rahim Ali', avatar: 'RA', online: true }
                ].map((connection, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-200">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {connection.avatar}
                      </div>
                      {connection.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium text-gray-800">{connection.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-xl hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 font-medium">
                  Update Skills
                </button>
                <button className="w-full p-3 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200 font-medium">
                  Add Experience
                </button>
                <button className="w-full p-3 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200 font-medium">
                  Share Achievement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  