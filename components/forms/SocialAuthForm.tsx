'use client'

import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { toast } from 'sonner'
import ROUTES from '@/constants/routes'

const SocialAuthForm = () => {
  
  const handleSignin = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME
      })
    } catch (err) {
      console.log(err);
      toast.error("Sign in Failed")
    }
  }

  return (
    <div className='mt-10 flex flex-wrap gap-4 mx-auto'>
      <Button className='cursor-pointer' onClick={() => handleSignin('github')}><Image src='/google.png' width={20} height={20} alt='google-logo' />Google Login</Button>
      <Button className='cursor-pointer' onClick={() => handleSignin('github')}><Image src='/github.png' width={20} height={20} alt='google-logo' />Github Login</Button>
    </div>
  )
}

export default SocialAuthForm