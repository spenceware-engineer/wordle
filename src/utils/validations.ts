
export const isValidUsername = (username: string) => {
  let errors = []
  if (!username) errors.push('Please enter a username')
  if (username.length < 3) errors.push('Username must be at least 3 characters')
  return errors
}

export const isValidPassword = (password: string) => {
  let errors = []
  if (!password) errors.push('Please enter a password')
  if (password.length < 6) errors.push('Password must be at least 6 characters')
  return errors
}

export const passwordMatch = (password: string, confirmPW: string) => {
  let errors = []
  if (password !== confirmPW) errors.push('Passwords do not match')
  return errors
}
