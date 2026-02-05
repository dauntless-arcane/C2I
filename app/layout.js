import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Campus To Internship | IIIC x CAPS',
  description: 'Register for career development workshops and events organized by IIIC and CAPS. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary text-white border-b border-default shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-5 sm:px-6">

    {/* Mobile: stack | Desktop: 3 columns */}
    <div className="
      flex flex-col gap-3 py-3
      sm:grid sm:grid-cols-3 sm:items-center sm:gap-0 sm:py-4
    ">

      {/* LEFT */}
      <div className="flex justify-center sm:justify-start">
        <img
          src="/C2I_Transparent_Logo_New.png"
          alt="Career 2 Industry Logo"
          className="h-12 sm:h-14 object-contain"
        />
      </div>

      {/* CENTER */}
      <div className="flex justify-center">
        <h1 className="text-lg sm:text-2xl font-semibold tracking-wide text-center">
          Campus to Internship
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center sm:justify-end items-center gap-4 sm:gap-6">
        <img
          src="/IIIC_Transparent_Logo.png"
          alt="IIIC Logo"
          className="h-10 sm:h-12 object-contain"
        />

        <img
          src="/CAPS_logo.png"
          alt="CAPS Logo"
          className="h-10 sm:h-12 object-contain"
        />
      </div>

    </div>
  </div>
</nav>





        <main className="min-h-screen bg-background">
          {children}
        </main>
        <footer className="bg-primary text-white text-center py-6 mt-0">
          <p className="text-sm">© 2026 CAPS Kengeri. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
