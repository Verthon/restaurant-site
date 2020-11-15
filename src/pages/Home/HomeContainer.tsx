import React, { useEffect, useState, useContext } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { gql, useQuery } from '@apollo/client'

import { Home } from './Home'
import { TestimonialType } from './Home.types'
import { Testimonial } from '../../ui/Testimonial/Testimonial'
import { CompanyDataContext } from '../../context/companyData/CompanyDataContext'

const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials {
      id
      author
      text
    }
  }
`

export const HomeContainer = () => {
  const company = useContext(CompanyDataContext)
  const { data } = useQuery(GET_TESTIMONIALS)
  const { hours, location, contact } = company.companyData
  const [dotValue, setDotValue] = useState(0)
  const [slides, setSlides] = useState<JSX.Element[]>([])

  useEffect(() => {
    AOS.init({ duration: 750 })
  }, [])

  useEffect(() => {
    if (data) {
      const testimonials: TestimonialType[] = data.testimonials
      const allTestimonials = testimonials.map((testimonial: TestimonialType) => {
        return <Testimonial key={testimonial.id} author={testimonial.author} text={testimonial.text} />
      })
      setSlides(allTestimonials)
    }
  }, [data])
  
  return (
    <Home
      company={{ hours, location, contact }}
      dotState={{ dotValue, setDotValue }}
      slidesState={{ slides, setSlides }}
    />
  )
}
