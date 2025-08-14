export default function MessagesPage() {
    return (
      <div className="min-h-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
            Messages
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay connected with your network. Send messages, share updates, and build meaningful relationships.
          </p>
        </div>

        {/* Message Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search conversations or contacts..."
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
            />
            <button className="absolute inset-y-0 right-0 px-6 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-r-2xl font-semibold hover:from-indigo-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-100 cursor-pointer group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">New Message</h3>
              <p className="text-gray-600 text-sm">Start a conversation</p>
            </button>
            
            <button className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-100 cursor-pointer group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Group Chat</h3>
              <p className="text-gray-600 text-sm">Create or join groups</p>
            </button>
            
            <button className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-100 cursor-pointer group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Favorites</h3>
              <p className="text-gray-600 text-sm">View saved chats</p>
            </button>
          </div>
        </div>

        {/* Recent Conversations */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Conversations</h2>
          <div className="space-y-4">
            {[
              {
                name: 'Ahmed Sarker',
                lastMessage: 'Thanks for the job referral!',
                time: '2 hours ago',
                unread: 2,
                avatar: 'AS',
                online: true
              },
              {
                name: 'Fatima Khan',
                lastMessage: 'When is the next alumni meetup?',
                time: '1 day ago',
                unread: 0,
                avatar: 'FK',
                online: false
              },
              {
                name: 'Rahim Ali',
                lastMessage: 'Great to connect with you!',
                time: '3 days ago',
                unread: 0,
                avatar: 'RA',
                online: true
              },
              {
                name: 'Sara Ahmed',
                lastMessage: 'The internship opportunity looks perfect',
                time: '1 week ago',
                unread: 1,
                avatar: 'SA',
                online: false
              }
            ].map((conversation, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {conversation.avatar}
                    </div>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{conversation.name}</h3>
                      <span className="text-sm text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  