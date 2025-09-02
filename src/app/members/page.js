const members = [
  { 
    name: "Rakibul Kabir", 
    year: "2020", 
    profession: "Data Scientist",
    company: "TechCorp Bangladesh",
    location: "Dhaka, Bangladesh",
    avatar: "RK",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    connections: 127,
    online: true
  },
  { 
    name: "Siam Arefin", 
    year: "2021", 
    profession: "Machine Learning Engineer",
    company: "AI Solutions Ltd",
    location: "Chittagong, Bangladesh",
    avatar: "SA",
    skills: ["TensorFlow", "Deep Learning", "NLP"],
    connections: 89,
    online: false
  },
  { 
    name: "Imroj Hasan", 
    year: "2019", 
    profession: "QA Engineer",
    company: "Quality Systems",
    location: "Sylhet, Bangladesh",
    avatar: "IH",
    skills: ["Selenium", "Testing", "Automation"],
    connections: 156,
    online: true
  },
  { 
    name: "Fatima Khan", 
    year: "2022", 
    profession: "Frontend Developer",
    company: "WebTech Solutions",
    location: "Dhaka, Bangladesh",
    avatar: "FK",
    skills: ["React", "JavaScript", "UI/UX"],
    connections: 94,
    online: true
  },
  { 
    name: "Ahmed Sarker", 
    year: "2023", 
    profession: "Backend Developer",
    company: "ServerLogic",
    location: "Rajshahi, Bangladesh",
    avatar: "AS",
    skills: ["Node.js", "MongoDB", "API Development"],
    connections: 67,
    online: false
  },
  { 
    name: "Nadia Rahman", 
    year: "2021", 
    profession: "Product Manager",
    company: "ProductHub",
    location: "Dhaka, Bangladesh",
    avatar: "NR",
    skills: ["Product Strategy", "Agile", "User Research"],
    connections: 203,
    online: true
  }
];

export default function Members() {
  return (
    <div className="min-h-full">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
          Our Members
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with talented alumni and build your professional network.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80 hover:bg-white" 
                placeholder="Search members by name, profession, or skills..." 
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80">
              <option>All Years</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80">
              <option>All Professions</option>
              <option>Data Scientist</option>
              <option>Developer</option>
              <option>Engineer</option>
              <option>Manager</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{members.length}</div>
            <p className="text-gray-700">Total Members</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">{members.filter(m => m.online).length}</div>
            <p className="text-gray-700">Online Now</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">{Math.round(members.reduce((acc, m) => acc + m.connections, 0) / members.length)}</div>
            <p className="text-gray-700">Avg Connections</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
            <p className="text-gray-700">Graduation Years</p>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 group hover:scale-105">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {member.avatar}
                  </div>
                  {member.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{member.year}</div>
                  <div className="text-xs text-gray-400">{member.location}</div>
                </div>
              </div>

              {/* Member Info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-1">{member.profession}</p>
                <p className="text-gray-600 text-sm mb-2">{member.company}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {member.connections} connections
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-700 text-xs rounded-full font-medium border border-indigo-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-xl hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 font-medium text-sm">
                  Connect
                </button>
                <button className="px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200 font-medium text-sm">
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Connect with fellow alumni, share opportunities, and grow your professional network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              Become a Member
            </a>
            <a 
              href="/search" 
              className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
  