import './globals.css'

export const metadata = {
  title: 'সংযোগ — Turning Connections into Careers',
  description: 'Alumni–Student networking platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-100 font-sans">
        {/* Enhanced Navbar */}
        <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-400 tracking-tight drop-shadow hover:scale-105 transition-transform duration-200">
              সংযোগ
            </a>
            
            {/* Navigation Links */}
            <nav className="flex gap-6 text-sm font-medium">
              <a href="/search" className="relative group px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              
              <a href="/jobs" className="relative group px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                <span>Jobs</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              
              <a href="/messages" className="relative group px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Messages</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              
              <a href="/dashboard" className="relative group px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Dashboard</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              {/* Login Button */}
              <a
                href="/login"
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center space-x-2 hover:bg-gray-50 rounded-lg px-3 py-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 5v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Login</span>
              </a>
              
              {/* Join Now Button */}
              <a
                href="/register"
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>Join Now</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
          <div className="rounded-3xl bg-white/80 shadow-xl p-6 sm:p-10 min-h-[60vh]">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
            <span>
              © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">সংযোগ</span>. All rights reserved.
            </span>
            <span className="mt-2 sm:mt-0">
              Made with <span className="text-pink-500">♥</span> for alumni & students
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
