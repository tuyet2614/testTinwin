import {REVIEW} from './constants';

const review = (data?: object) => {
  return {
    type: REVIEW,
    payload: data,
  };
};

export {review};
