import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Separator, DateText } from './Styles';

const propTypes = {
  date: PropTypes.string.isRequired,
};

const DateSeparator = ({ date }) => {
  const formatDate = dateStr => {
    const dateMoment = moment(dateStr);
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');

    if (dateMoment.isSame(today, 'day')) {
      return 'Today';
    }
    if (dateMoment.isSame(yesterday, 'day')) {
      return 'Yesterday';
    }
    return dateMoment.format('MMMM D, YYYY');
  };

  return (
    <Separator>
      <DateText>{formatDate(date)}</DateText>
    </Separator>
  );
};

DateSeparator.propTypes = propTypes;

export default DateSeparator;
