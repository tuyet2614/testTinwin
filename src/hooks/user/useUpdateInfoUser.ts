import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import {getUserState} from '../../redux/user/selectors';
import UserServices from '../../services/UserServices';
import useShowNotification from '../useShowNotification';

const useUpdateInfoUser = () => {
  // const userInfo = useSelector(getUserState);
  const {dispatchShowNotification, notification} = useShowNotification();

  const update = (
    name: string,
    dob: string,
    gender: any,
    phoneNumber: string,
    email: string,
  ) => {
    const data = {
      name: name,
      dob: dob,
      gender: gender,
      phoneNumber: phoneNumber,
      email: email,
    };

    UserServices.updateInfo(data)
      .then(res => {
        if (res.data) {
          dispatchShowNotification({
            icon: faCheckCircle,
            text: 'Cập nhật thông tin tài khoản thành công',
            visible: true,
          });
          setTimeout(
            () =>
              dispatchShowNotification({
                visible: false,
              }),
            1000,
          );
        }
      })
      .catch(err => console.log(err));
  };

  return update;
};

export default useUpdateInfoUser;
