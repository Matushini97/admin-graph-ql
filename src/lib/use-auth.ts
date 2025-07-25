import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('basicToken')
    setIsAuthenticated(!!token)
    setIsLoading(false)
  }, [])

  const login = (token: string) => {
    localStorage.setItem('basicToken', token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('basicToken')
    setIsAuthenticated(false)
  }

  return { isAuthenticated, isLoading, login, logout }
}
