export function isVietnamesePhoneNumber(number: string) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}
export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};
export const validatePass = (pass: string) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    pass,
  );
};
export function formatDate(date: Date) {
  let day = date.toLocaleString('en-GB').split(',')[0];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(
    -2,
  )}       ${day}`;
}
