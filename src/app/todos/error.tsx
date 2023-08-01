"use client";

import { useEffect } from "react";

const Error = (
  {
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }
) => {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="form__container">
      <h1 className="page-title">Oops... Something went wrong! 👀</h1>
      <button
        className="form__button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error