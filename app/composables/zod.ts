import * as z from 'zod'

export const useZod = () => {
  const errorMap = (issues: z.core.$ZodIssue[]) =>
    issues.map(issue => ({
      message: issue.message,
      name: issue.path.join('.'),
    }))

  return { z, errorMap }
}
