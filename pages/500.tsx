import React from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()
  return (
    <div className="min-h-screen grid place-items-center">
        <div className="w-96 flex justify-center items-center flex-col text-white/50 space-y-8">
            <p className="text-7xl font-bold font-mono">
                500
            </p>
            <p className="text-white/30 text-2xl font-thin">
              Experiencing server issues, sorry!
            </p>
            <button className="transition-all duration-150 underline hover:text-blue-500 rounded-md p-4 text-white tracking-widest" onClick={() => router.back()}>Go Back</button>
        </div>
    </div>
  )
}
