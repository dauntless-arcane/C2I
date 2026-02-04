'use client'

import Button from '@/components/Button'
import FormLayout from '@/components/FormLayout'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Toast from '@/components/Toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LinkedInRegistration() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)
  const [formData, setFormData] = useState({
    studentName: '',
    christMailId: '',
    registrationNumber: '',
    classSection: '',
    linkedInChallenge: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const response = await fetch('https://script.google.com/macros/s/AKfycbwSXkZCQ6kUI80L7dlRwX7aATIZAkVwCoPgYX5iRNuy_ipgAZFhMAzwysEDmeBGBnWILg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'linkedin',
          data: formData
        })
      })

      setToast({ message: 'Registration submitted successfully!', type: 'success' })
      
      // Reset form (keep email prefilled)
      setFormData({
        studentName: '',
        christMailId: '',
        registrationNumber: '',
        classSection: '',
        linkedInChallenge: ''
      })

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push('/')
      }, 2000)

    } catch (error) {
      setToast({ message: 'Registration failed. Please try again.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormLayout title="The LinkedIn Strategy – Build. Brand. Connect.">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="mb-6 p-4 bg-blue-50 rounded-md">
        <h3 className="font-semibold text-primary mb-2">Event Details</h3>
        <p className="text-sm text-gray-700">Speaker: Priyanka Rakshit</p>
        <p className="text-sm text-gray-700">Date: 3 February 2026</p>
        <p className="text-sm text-gray-700">Time: 10:00 AM to 12:00 PM</p>
        <p className="text-sm text-gray-700">Venue: 1st Block Auditorium</p>
      </div>

      <form onSubmit={handleSubmit}>
        
        <Input
          label="Student Name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <Input
          label="Christ Mail ID"
          name="christMailId"
          type="email"
          value={formData.christMailId}
          onChange={handleChange}
          required
        />

        <Input
          label="Registration Number"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          required
        />

        <Input
          label="Class and Section"
          name="classSection"
          value={formData.classSection}
          onChange={handleChange}
          required
        />

        <Textarea
          label="What LinkedIn challenge are you hoping this event will help you solve?"
          name="linkedInChallenge"
          value={formData.linkedInChallenge}
          onChange={handleChange}
          required
          rows={5}
        />

        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Registration'}
        </Button>
      </form>
    </FormLayout>
  )
}
