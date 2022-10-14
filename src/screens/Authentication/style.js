import {black, grey, red} from '../../constant/const';

const {StyleSheet} = require('react-native');

export const style = StyleSheet.create({
  image: {
    width: 92,
    height: 72,
  },
  container: {
    marginTop: 87,
    marginLeft: 24,
    marginBottom: 29,
    marginRight: 25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  boxTextWelcome: {
    marginTop: 20,
    width: 247,
  },
  textWelcome: {
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 35,
    color: black,
  },
  textPrimary: {
    color: '#FC832D',
  },
  loginView: {
    marginTop: 40,
  },
  textDescription: {
    color: 'grey',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  input: {
    // width: 327,
    flex: 1,
    // alignItems: 'stretch',
    minHeight: 50,
    borderColor: '#0000001F 12%',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    // marginBottom: 30,
    color: grey,
  },
  inputErr: {
    // width: 327,
    flex: 1,
    // alignItems: 'stretch',
    minHeight: 50,
    borderColor: red,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    // marginBottom: 30,
    color: grey,
  },
  textSMS: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
    marginTop: 10,
    // marginRight: 12,
  },
  textForgot: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
  },
});
export const styleSMS = StyleSheet.create({
  image: {
    width: 115,
    height: 79,
  },
  container: {
    marginTop: 87,
    marginLeft: 24,
    marginBottom: 29,
    marginRight: 25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  boxTextWelcome: {
    marginTop: 20,
    width: 247,
  },
  textWelcome: {
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 35,
  },
  textPrimary: {
    color: '#FC832D',
  },
  loginView: {
    marginTop: 40,
  },
  textDescription: {
    color: 'grey',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  input: {
    // width: 327,
    flex: 1,
    // alignItems: 'stretch',
    minHeight: 50,
    borderColor: '#0000001F 12%',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 20,
  },
  textSMS: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
    // marginRight: 12,
  },
  textForgot: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
  },
});

export const styleRegister = StyleSheet.create({
  image: {
    width: 92,
    height: 72,
  },
  container: {
    marginTop: 10,
    marginLeft: 24,
    marginBottom: 29,
    marginRight: 25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  boxTextWelcome: {
    marginTop: 20,
    width: 247,
  },
  textWelcome: {
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 35,
    color: black,
  },
  textPrimary: {
    color: '#FC832D',
  },
  loginView: {
    marginTop: 40,
  },
  textDescription: {
    color: 'grey',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  input: {
    // width: 327,
    flex: 1,
    // alignItems: 'stretch',
    minHeight: 50,
    borderColor: '#0000001F 12%',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 30,
    color: grey,
  },
  textSMS: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
    marginTop: 10,
    // marginRight: 12,
  },
  textForgot: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
  },
  textPolicy: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    color: '#858585',
    textAlign: 'center',
  },
  textPolicyBlack: {
    color: '#1F1F1F',
  },
});
