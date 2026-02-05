import EventCard from '@/components/EventCard'

export default function Home() {
  const events = [
    {
    id: 'linkedin',
    title: 'The LinkedIn Strategy – Build. Brand. Connect.',
    description:
      'A structured LinkedIn workshop focused on creating a professional presence. Learn profile optimization, personal branding, and networking strategies to build meaningful professional connections. Gain practical insights and actionable guidance to effectively leverage LinkedIn for career growth and professional development.',
    speaker: 'Ms.Priyanka Rakshit',
    eventDetails: {
      date: 'February 9, 2026',
      time: '10:00 AM to 12:00 PM',
      venue: 'Block I Auditorium'
    },
    link: '/register/linkedin'
  },
  {
    id: 'interview',
    title: 'The Interview Blueprint - Prepare. Perform. Succeed.',
    description:
      'A structured preparation session focused on interviews and group discussions. Understand what recruiters look for, learn effective communication techniques, and develop strategies to present yourself with confidence and clarity. Gain practical insights, avoid common mistakes, and practice real-world scenarios to perform successfully in recruitment settings.',
    speaker: 'Mr.Mohammed Ashfak',
    eventDetails: {
      date: 'February 10, 2026',
      time: '11:00 AM to 1:00 PM',
      venue: 'Block I Auditorium'
    },
    link: '/register/interview'
  },
  {
    id: 'resume',
    title: 'The Resume Roadmap - Build. Structure. Impress.',
    description:
      'A structured resume-building workshop designed to help students create strong, job-ready resumes. Learn the best formats, essential sections, and practical strategies to effectively highlight academics, extracurricular activities, and projects. Gain expert guidance on resume dos and don’ts, ATS optimization, and modern hiring practices to confidently prepare for the job market.',
    speaker: 'Ms.Shilpa Laharwal',
    eventDetails: {
      date: 'February 12, 2026',
      time: '10:00 AM to 12:00 PM',
      venue: 'Block III Auditorium'
    },
    link: '/register/resume'
  },

  
]


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">IIIC x CAPS</h1>
        <h1 className="text-3xl font-bold text-primary mb-3">presents </h1>
        <h1 className="text-3xl font-bold text-primary mb-2">
          Campus to Internship (C2I)
        </h1>
        <p className="text-gray-600 text-lg">
          Select an event and register to participate
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
