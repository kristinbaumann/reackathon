import React, {
  createClass,
  PropTypes,
} from 'react';

const Countdown = createClass({
  displayName: 'Simple countDown',
  propTypes: {
    date: PropTypes.string,
    className: PropTypes.string,
    days: PropTypes.objectOf(PropTypes.string),
    hours: PropTypes.string,
    mins: PropTypes.string,
    segs: PropTypes.string,
    onEnd: PropTypes.func,
  },
  getInitialState() {
    return {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  },
  getDefaultProps() {
    return {
      date: new Date(),
      className: 'CountDown',
      days: {
        plural: 'Days',
        singular: 'Day',
      },
      hours: 'Hours',
      mins: 'Min',
      segs: 'Sec',
      onEnd: () => {},
    };
  },
  componentDidMount() {
    this.interval = setInterval(()=> {
      const date = this.getDateData(this.props.date);
      if (date) {
        this.setState(date);
      } else {
        this.stop();
        this.props.onEnd();
      }
    }, 1000);
  },
  componentWillUnmount() {
    this.stop();
  },
  getDateData(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date)) / 1000;

    if (diff <= 0) {
      return false;
    }

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff >= (365.25 * 86400)) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  },
  render() {
    const countDown = this.state;
    let days;
    if (countDown.days === 1) {
      days = this.props.days.singular;
    } else {
      days = this.props.days.plural;
    }
    return (
      <span className={this.props.className}>
        <span className={`${this.props.className}-col is-day`}>
          <span className={`${this.props.className}-col-element`}><strong>{this.leadingZeros(countDown.days)}</strong> <span>{days}</span></span>
        </span>
        <span className={`${this.props.className}-col is-hour`}>
          <span className={`${this.props.className}-col-element`}><strong>{this.leadingZeros(countDown.hours)}</strong> <span>{this.props.hours}</span></span>
        </span>
        <span className={`${this.props.className}-col is-min`}>
          <span className={`${this.props.className}-col-element`}><strong>{this.leadingZeros(countDown.min)}</strong> <span>{this.props.mins}</span></span>
        </span>
        <span className={`${this.props.className}-col is-seg`}>
          <span className={`${this.props.className}-col-element`}><strong>{this.leadingZeros(countDown.sec)}</strong> <span>{this.props.segs}</span></span>
        </span>
      </span>
    );
  },
  stop() {
    clearInterval(this.interval);
  },
  leadingZeros(num, length = null) {
    let length_ = length;
    let num_ = num;
    if (length_ === null) {
      length_ = 2;
    }
    num_ = String(num_);
    while (num_.length < length_) {
      num_ = '0' + num_;
    }
    return num_;
  },
});

export default Countdown;
