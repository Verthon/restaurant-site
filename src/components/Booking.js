/* eslint react/prop-types: 0 */
import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { ReactComponent as OptionsIcon } from '../assets/icons/option.svg'

const Booking = ({ name, email, confirmed, date, guests, toggleOptions }) => {
  return (
    <tr className='table__row animate__animated animate__fadeInDown'>
      <td className='table__cell'>{name}</td>
      <td className='table__cell'>{dayjs(date).format('DD/MM/YYYY')}</td>
      <td className='table__cell'>{dayjs(date).set('minutes', 0).format('HH:mm')}</td>
      <td className='table__cell'>{email}</td>
      <td className='table__cell table__cell--center'>{guests}</td>
      <td className="table__cell table__cell--center"><OptionsIcon className='table__cell__icon' onClick={toggleOptions}/></td>
    </tr>
  )
}

Booking.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  guests: PropTypes.number,
  confirmed: PropTypes.bool
}

Booking.defaultProps = {
  name: 'John Doe',
  email: 'john.doe@gmail.uu',
  date: new Date(),
  confirmed: false
}

export default Booking
