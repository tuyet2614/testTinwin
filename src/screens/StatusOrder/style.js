import {Dimensions, StyleSheet} from 'react-native';
import {
  anotherOrange,
  colorStyleGrey,
  darkestGrey,
  white,
} from '../../constant/const';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: white,
    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 30,
  },
  title: {
    flexDirection: 'row',
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: darkestGrey,
    marginLeft: 6,
  },
  infor: {
    marginTop: 26,
    flexDirection: 'row',
    marginBottom: 10,
  },
  textInfor: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    marginLeft: 17,
  },
  imgProduct: {
    width: 76,
    height: 76,
  },
  productTitle: {
    flexWrap: 'wrap',
    color: darkestGrey,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
  productCode: {
    marginTop: 3,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: darkestGrey,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: darkestGrey,
  },
  count: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: anotherOrange,
  },
  totalCount: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: colorStyleGrey,
  },
  totalPrice: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: anotherOrange,
  },
});
