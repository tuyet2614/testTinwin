import ShippingServices from '../../services/ShippingServices';

const useAddNewAddress = () => {
  const addNewAddress = (data: object) => {
    const postData = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      specificAddress: data.specificAddress,
      shippingAddressType: data.shippingAddressType,
      isDefault: data.isDefault,
      provinceId: data.provinceId,
      districtId: data.districtId,
      wardId: data.wardId,
    };
    ShippingServices.addNewAddress(postData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return addNewAddress;
};

export default useAddNewAddress;
