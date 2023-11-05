const checkStringLength = (checkString, maxLenght) => checkString.length <= maxLenght;

checkStringLength();

const checkPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    newString += normalizeString.at(i);
  }

  return newString === normalizeString;
};

checkPalindrome();

const convertTime = (allTime) => {
  const time = allTime.split(':', 2);
  const getMinutes = parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
  return getMinutes;
};

const checkTime = (startDay, finishDay, startMeeting, timeMeeting) => {
  const startDayMinutes = convertTime(startDay);
  const endDayMinutes = convertTime(finishDay);
  const startMeetingMinutes = convertTime(startMeeting);
  return (startDayMinutes <= startMeetingMinutes) && ((startMeetingMinutes + timeMeeting) <= endDayMinutes);
};

checkTime('8:00', '17:30', '08:00', 900);
