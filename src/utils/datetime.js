export function timeSince(date) {
  const difference = Date.now() / 1000 - date;

  var verb;
  var period;
  var num;

  if (difference > 0) {
    verb = ' ago';
  } else {
    verb = ' from now';
  }

  if (difference > 31557600) {
    num = Math.floor(difference / 31557600);
    period = ' year';
  } else if (difference > 2629800) {
    num = Math.floor(difference / 2629800);
    period = ' month';
  } else if (difference > 604800) {
    num = Math.floor(difference / 604800);
    period = ' week';
  } else if (difference > 86400) {
    num = Math.floor(difference / 86400);
    period = ' day';
  } else if (difference > 3600) {
    num = Math.floor(difference / 3600);
    period = ' hour';
  } else if (difference > 60) {
    num = Math.floor(difference / 60);
    period = ' minute';
  }
  if (num > 1) {
    period = period + 's';
  }

  return num + period + verb;
}
