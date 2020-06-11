import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../components/DataContext'

export const useCompanyData = () => {
  const { state } = useContext(DataContext)
  const [companyData, setCompanyData] = useState({
    hours: {},
    location: {},
    contact: {},
    isLoading: true
  })

  useEffect(() => {
    const data = state.company.data
    setCompanyData({
      ...companyData,
      hours: data.hours,
      location: data.location,
      contact: data.contact,
      isLoading: false
    })
  }, [state.company.data])

  return {
    name: companyData.name,
    hours: companyData.hours,
    location: companyData.location,
    contact: companyData.contact,
    isLoading: companyData.isLoading
  }
}
