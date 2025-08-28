'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Loader2, Mail, CheckCircle } from 'lucide-react'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

export default function WaitingListPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.thepurityapp.com/save-waiting-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        toast.success('Thank you! You\'ve been added to our waiting list.')
      } else {
        throw new Error('Failed to submit email')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/final_form_image_101_cropped_to_be_used.png"
              alt="The Purity App"
              width={120}
              height={120}
              className="h-auto"
            />
          </div>

          {/* Success Icon */}
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              You're on the list!
            </h1>
            <p className="text-gray-600">
              Thank you for joining our waiting list. We'll notify you as soon as The Purity App is available.
            </p>
            <p className="text-sm text-gray-500">
              Be among the first to experience freedom - empowering Christians to live porn free. ✝️
            </p>
          </div>

          {/* Call to Action */}
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="mt-6"
          >
            Join Another Email
          </Button>

          {/* Bible Verse */}
          <div className="text-center pt-6 border-t border-gray-200 mt-8">
            <p className="text-sm font-medium text-gray-700 italic">
              "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"
            </p>
            <p className="text-xs text-gray-500 mt-1">
              2 Corinthians 5:17 NIV
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/final_form_image_101_cropped_to_be_used.png"
            alt="The Purity App"
            width={120}
            height={120}
            className="h-auto"
          />
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Join The Waiting List
          </h1>
          <p className="text-lg text-gray-600">
            Be the first to know when The Purity App launches
          </p>
          <p className="text-sm text-gray-500">
            Empowering Christians to live porn free. ✝️
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900"
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              'Join Waiting List'
            )}
          </Button>
        </form>

        {/* Additional Info */}
        <div className="text-center text-sm text-gray-500">
          <p>
            We respect your privacy. Your email will only be used to notify you about The Purity App launch.
          </p>
        </div>

        {/* Bible Verse */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-700 italic">
            "How can a young person stay on the path of purity? By living according to your word."
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Psalm 119:9 NIV
          </p>
        </div>
      </div>
    </div>
  )
}
