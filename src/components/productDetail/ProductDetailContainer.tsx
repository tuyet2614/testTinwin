import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FlatList, Text, View} from 'react-native';
import InfoDetailItem from './InfoDetailItem';
import ProductDetailTitle from './ProductDetailTitle';
import RenderHtml from 'react-native-render-html';

interface Props {
  arr?: object[];
  title: string;
  icon: IconProp;
  text?: string;
}

const ProductDetailContainer: React.FC<Props> = (props: Props) => {
  const {arr, title, icon, text} = props;

  const renderItem = ({item, index}) => (
    <InfoDetailItem text={item.text} value={item.value} index={index} />
  );

  const source = {
    html: text,
  };

  return (
    <View className="">
      <ProductDetailTitle icon={icon} title={title} />
      {arr !== undefined ? (
        <FlatList
          data={arr}
          keyExtractor={key => key.id}
          renderItem={renderItem}
        />
      ) : (
        <View className="mx-5">
          <RenderHtml source={source} />
        </View>
      )}

      <View className="h-2 bg-gray-100 mt-3"></View>
    </View>
  );
};

export default ProductDetailContainer;
