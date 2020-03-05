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
    period = ' y';
    // } else if (difference > 2629800) {
    //   num = Math.floor(difference / 2629800);
    //   period = ' m';
  } else if (difference > 604800) {
    num = Math.floor(difference / 604800);
    period = ' w';
  } else if (difference > 86400) {
    num = Math.floor(difference / 86400);
    period = ' d';
  } else if (difference > 3600) {
    num = Math.floor(difference / 3600);
    period = ' h';
  } else if (difference > 60) {
    num = Math.floor(difference / 60);
    period = ' m';
  }
  if (num > 1) {
    period = period + 's';
  }

  return num + period;
}
