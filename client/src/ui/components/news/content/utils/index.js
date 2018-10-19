// Node Modules
import moment from 'moment';
import $ from 'jquery';

function monthParser(month) {
  switch (month) {
    case 0:
      return 'Jan';
    case 1:
      return 'Feb';
    case 2:
      return 'Mar';
    case 3:
      return 'Apr';
    case 4:
      return 'May';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Aug';
    case 8:
      return 'Sept';
    case 9:
      return 'Oct';
    case 10:
      return 'Nov';
    case 11:
      return 'Dec';
    default:
      return 'Jan';
  }
}

export function timeParser(date) {
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const engagementDate = date;

  if (moment(engagementDate).isSame(today, 'day')) return moment(date, 'ddd DD-MMM-YYYY, hh:mm A').format('hh:mm A');
  if (moment(engagementDate).isSame(yesterday, 'day')) return 'Yesterday';
  return `${monthParser(date.getMonth())} ${date.getDay()}`;
}

export function removeNew(id) {
  const settings = {
    async: true,
    crossDomain: true,
    url: 'http://localhost:8080/api/remove',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'cache-control': 'no-cache',
    },
    data: {
      id,
    },
  };

  return $.ajax(settings);
}
