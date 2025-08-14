export default function HomePage() {
  return (
    <section className="text-center mt-12">
      <h1 className="text-4xl font-bold text-gray-800">সংযোগ</h1>
      <p className="mt-4 text-lg text-gray-600">
        Turning Connections into Careers
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="/register" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Join Now</a>
        <a href="/search" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">Search Alumni</a>
      </div>
    </section>
  )
}
