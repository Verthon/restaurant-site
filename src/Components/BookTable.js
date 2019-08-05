/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import contactInfo from '../contactInfo';
import { sendBookingInfo } from '../actions/index';
import Navbar from './Navbar';
import NavItem from './NavItem';
import bookTableImg from '../images/brooke-lark-book-table.jpg';

class BookTable extends React.Component {
  static propTypes = {
    sendData: PropTypes.func,
    history: PropTypes.shape({ push: PropTypes.func }),
  };

  static defaultProps = {
    sendData: sendBookingInfo,
    history: {},
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.state = {
      min: new Date(),
      max: new Date(),
      booking: {
        date: new Date(),
        people: 1,
        name: 'John Doe',
        email: '',
      },
      links: ['menu', 'book-table'],
    };
  }

  handleDate(e) {
    const { setState } = this;
    const booking = { ...this.state.booking };
    booking.date = e;
    setState({ booking });
  }

  handleGuests(e) {
    const { setState } = this;
    const booking = { ...this.state.booking };
    booking.people = e.target.value;
    setState({ booking });
  }

  handleName(e) {
    const { setState } = this;
    const booking = { ...this.state.booking };
    booking.name = e.target.value;
    setState({ booking });
  }

  handleEmail(e) {
    const { setState } = this;
    const booking = { ...this.state.booking };
    booking.email = e.target.value;
    setState({ booking });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({ pathname: '/review-booking' });
  }

  render() {
    const { booking, min, max } = this.state;
    const { location, hours } = contactInfo.info;

    return (
      <Fragment>
        <div className="table-booking">
          <Navbar>
            {this.state.links.map((link, index) => (
              <NavItem key={index} name={link} hashlink={false} />
            ))}
          </Navbar>
          <div className="row container">
            <div className="section section__col">
              <h2 className="table-booking__subtitle">Make a reservation</h2>
              <Form onSubmit={this.handleSubmit} className="form-group">
                <label className="label" htmlFor="name">
                  Name
                  <input
                    className="table-booking__input"
                    type="text"
                    required
                    name="name"
                    onChange={this.handleName}
                    placeholder="Name"
                  />
                </label>
                <label htmlFor="email" className="label">
                  Email
                  <input
                    className="table-booking__input"
                    type="email"
                    name="email"
                    required
                    onChange={this.handleEmail}
                    placeholder="email"
                  />
                </label>
                <label htmlFor="Datepicker" className="label">
                  Please add date
                  <DatePicker
                    name="Datepicker"
                    className="table-booking__input"
                    selected={booking.date}
                    onChange={this.handleDate}
                    showTimeSelect
                    timeFormat="HH"
                    timeIntervals={60}
                    minTime={min.setHours(11)}
                    maxTime={max.setHours(22)}
                    dateFormat="MMMM dd, yyyy h aa"
                    timeCaption="Time"
                    placeholderText="Click and choose the date"
                  />
                </label>

                <label className="label" htmlFor="people">
                  Number of guests
                  <input
                    className="table-booking__input"
                    name="people"
                    type="number"
                    required
                    placeholder="Number of guests"
                    min="1"
                    max="8"
                    onChange={this.handleGuests}
                  />
                </label>

                <p className="text table-booking__reminder">
                  Table is kept for 15 minutes after reservation time. We
                  appreciate you being on time.
                </p>
                <button
                  className="btn btn--dark"
                  type="submit"
                  onClick={() => this.props.sendData(booking)}
                >
                  Next step
                </button>
              </Form>
            </div>
            <article className="section section__col">
              <h2 className="table-booking__subtitle">Located in London</h2>
              <p>
                {location.street} {location.number}
              </p>
              <p>
                {location.city}, {location.province}, {location.code}
              </p>
              <p>{location.phone}</p>

              <h2 className="table-booking__subtitle">Hours of operation</h2>
              <p>{hours.week.name}</p>
              <p>{hours.week.time}</p>
              <p>{hours.weekend.name}</p>
              <p>{hours.weekend.time}</p>
            </article>
            <div className="section section__col table-booking__image">
              <picture>
                <img
                  src={bookTableImg}
                  alt=""
                  className="table-booking__image"
                />
              </picture>
            </div>
          </div>
          <footer className="table-booking__footer" />
        </div>
      </Fragment>
    );
  }
}

// eslint-disable-next-line max-len
const mapDispatchToProps = dispatch => ({ sendData: payload => dispatch(sendBookingInfo(payload)) });

export default connect(
  null,
  mapDispatchToProps,
)(BookTable);
