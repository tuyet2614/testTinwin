import {review} from '../../@types/apiReview';
import {GET_FOR_CUSTOMER} from './constants';

interface ReviewState {
  review: review;
}

const initState: ReviewState = {
  review: {
    extraData: {
      countOneStar: 0,
      countTwoStar: 0,
      countThreeStar: 0,
      countFourStar: 0,
      countFiveStar: 0,
      totalCount: 0,
      haveCommentCount: 0,
    },
    totalCount: 0,
    items: [],
  },
};

const reivewReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_FOR_CUSTOMER:
      return state;
    default:
      return state;
  }
};

export default reivewReducer;
