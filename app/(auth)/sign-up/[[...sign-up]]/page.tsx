'use client'

import * as Clerk from '@clerk/elements/common'
import * as Signup from '@clerk/elements/sign-up'

export default function SignupPage() {
  return (
    <div className="min-h-screen grid w-full items-center bg-zinc-900 px-4 font-mono text-sm text-white">
      <Signup.Root>

        {/* START STEP */}
        <Signup.Step
          name="start"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className="mx-auto h-12 w-12"
              aria-hidden
            >
              <rect width="40" height="40" fill="#FFD700" />
              <rect x="8" y="8" width="24" height="24" fill="#000" />
            </svg>

            <h1 className="mt-3 text-base font-bold tracking-wide text-yellow-400 uppercase">
              Create Account
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />

          <div className="space-y-4">
            <Clerk.Field name="emailAddress" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Email
              </Clerk.Label>
              <Clerk.Input
                type="email"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>
          </div>

          <Signup.Action
            submit
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase"
          >
            Sign Up
          </Signup.Action>

          <p className="text-center text-xs text-yellow-400">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className="font-bold underline underline-offset-2 hover:text-yellow-200"
            >
              Sign in
            </Clerk.Link>
          </p>
        </Signup.Step>

        {/* VERIFICATION STEP */}
        <Signup.Step
          name="verifications"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center">
            <h1 className="text-base font-bold tracking-wide text-yellow-400 uppercase">
              Verify Email Code
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />

          <Signup.Strategy name="email_code">
            <Clerk.Field name="code" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Email Code
              </Clerk.Label>
              <Clerk.Input
                type="text"
                inputMode="numeric"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            <Signup.Action
              submit
              className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase"
            >
              Verify
            </Signup.Action>
          </Signup.Strategy>

          <p className="text-center text-xs text-yellow-400">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className="font-bold underline underline-offset-2 hover:text-yellow-200"
            >
              Sign in
            </Clerk.Link>
          </p>
        </Signup.Step>

        {/* CONTINUE STEP */}
        <Signup.Step
          name="continue"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center">
            <h1 className="text-base font-bold tracking-wide text-yellow-400 uppercase">
              Continue Registration
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />

          <Clerk.Field name="username" className="space-y-1">
            <Clerk.Label className="font-bold text-yellow-400 uppercase">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
            />
            <Clerk.FieldError className="text-sm text-red-500" />
          </Clerk.Field>

          <Signup.Action
            submit
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase"
          >
            Continue
          </Signup.Action>

          <p className="text-center text-xs text-yellow-400">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className="font-bold underline underline-offset-2 hover:text-yellow-200"
            >
              Sign in
            </Clerk.Link>
          </p>
        </Signup.Step>

      </Signup.Root>
    </div>
  )
}
