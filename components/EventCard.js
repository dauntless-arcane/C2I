import Link from 'next/link'

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-primary mb-3">
        {event.title}
      </h3>
      
      <p className="text-gray-700 text-sm mb-4 flex-grow leading-relaxed">
        {event.description}
      </p>

      {event.speaker && (
        <div className="mb-3">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Speaker:</span> {event.speaker}
          </p>
        </div>
      )}

      {event.eventDetails && (
        <div className="mb-4 space-y-1">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Date:</span> {event.eventDetails.date}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Time:</span> {event.eventDetails.time}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Venue:</span> {event.eventDetails.venue}
          </p>
        </div>
      )}

     {event.link ? (
        <Link
          href={event.link}
          className="mt-auto bg-secondary hover:bg-primary text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-200"
        >
          Register Now
        </Link>
      ) : (
        <button
          disabled
          className="mt-auto bg-gray-400 text-gray-200 font-medium py-3 px-6 rounded-md cursor-not-allowed"
        >
          Closed
        </button>
      )}

    </div>
  )
}
