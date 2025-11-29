import SocialAuthForm from '@/components/forms/SocialAuthForm'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex items-center justify-center min-h-screen 
            bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2e1f0f] 
            text-white p-4">

            <section
                className="w-[400px] min-h-[500px] 
                bg-white/10 
                backdrop-blur-xl 
                border border-white/10
                shadow-xl 
                shadow-black/40 
                rounded-2xl 
                p-6
                flex flex-col gap-6"
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Join Dev <span className="text-orange-400">Overflow</span>
                    </h1>
                    <p className="text-sm text-gray-300 mt-1">
                        Create your account and start contributing.
                    </p>
                </div>

                {children}

                <SocialAuthForm />
            </section>

        </main>
    )
}

export default layout
