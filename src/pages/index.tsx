import Image from 'next/image'
import { Clock, MapPin, Phone, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-center items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Best%20West%20Logo-HqmsnfgFiZg8xmGrbPMr4cO00khOgz.png"
            alt="BestWest Pharmacy Logo"
            width={300}
            height={75}
            className="h-24 w-auto"
          />
          <nav>
          </nav>
        </div>
      </header>

      <main>
      <section className="bg-red-600 text-white py-6 flex items-center justify-center" style={{ minHeight: '150px' }}>
  <div className="container mx-auto px-4 text-center">
<h1 className="text-4xl sm:text-2xl font-bold mb-4">Welcome to Best West Pharmacy</h1>
    <p className="text-xl sm:text-lg mb-4">Your trusted family pharmacy in Los Banos, California</p>

    {/* New Bullet Points */}
    <ul className="list-disc list-inside mx-auto sm:text-center text-lg sm:text-md mb-6"> {/* Centered list */}
      <li className="mb-2">We accept Medi-Cal!</li>
      <li className="mb-2">Quick and efficient service!</li>
      <li className="mb-2">We Deliver!</li>
    </ul>

    {/* Adjusted space between bullet points and reviews */}
    <div className="flex items-center justify-center mt-8"> {/* Added margin-top for separation */}
      <Star className="w-6 h-6 sm:w-5 sm:h-5 fill-current text-yellow-400" />
      <span className="ml-2 text-lg sm:text-md font-semibold">4.4</span>
      <span className="ml-2 text-sm">(7 Google reviews)</span>
    </div>
  </div>
</section>


        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-6 inline-block mb-4">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-600 mb-2">Prescription Filling</h3>
                <p className="text-gray-600">Quick and accurate prescription services</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-6 inline-block mb-4">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-600 mb-2">Health Consultations</h3>
                <p className="text-gray-600">Expert advice from our pharmacists</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-6 inline-block mb-4">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-600 mb-2">Health Products</h3>
                <p className="text-gray-600">Wide range of over-the-counter medications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600 mr-2" />
                <a href="tel:+12092552305" className="text-red-600">
                  (209) 255 - 2305
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600 mr-2" />
                <a
                  href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAtIBCDIwNTVqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KaWYtD0if5GAMdUBJzTA2d7w&daddr=400+W+I+St+Suite+D,+Los+Banos,+CA+93635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600"
                >
                  400 W I St Suite D, Los Banos, CA 93635
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-600 mr-2" />
                <span className="text-red-600">Mon - Fri: 10AM - 6:30PM, Sat - Sun: Closed</span>
              </div>
            </div>
          </div>
        </section>


        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-4">Business Hours</h2>
            <div className="max-w-md mx-auto">
              <table className="w-full">
                <tbody>
                  {[
                    { day: 'Monday', hours: '10 AM – 6:30 PM' },
                    { day: 'Tuesday', hours: '10 AM – 6:30 PM' },
                    { day: 'Wednesday', hours: '10 AM – 6:30 PM' },
                    { day: 'Thursday', hours: '10 AM – 6:30 PM' },
                    { day: 'Friday', hours: '10 AM – 6:30 PM' },
                    { day: 'Saturday', hours: 'Closed' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((item, index) => (
                    <tr key={item.day} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="py-2 px-4 font-semibold text-red-600">{item.day}</td>
                      <td className="py-2 px-4 text-right font-semibold text-red-600">{item.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold">&copy; 2024 Best West Pharmacy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}