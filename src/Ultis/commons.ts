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
  if (!date) {
    return;
  }
  let day = date.toLocaleString('en-GB').split(',')[0];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(
    -2,
  )}       ${day}`;
}
export function formatDateDetailOrder(date: Date) {
  if (!date) {
    return;
  }
  let day = date.toLocaleString('en-GB').split(',')[0];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${day} ${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}`;
}
export const toVND = (value: number) => {
  if (!value) {
    return;
  }
  return value.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
};
export function removeItemByValue(array: [], item: number) {
  if (!array || !item) {
    return;
  }
  var index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
export function formartPhoneNumber(value: string) {
  if (!value) {
    return;
  }
  while (value.charAt(0) === '0') {
    value = value.substr(1);
  }
  return `(+84) ${value}`;
}
