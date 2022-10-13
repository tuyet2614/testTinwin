import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native';


interface Props {
  image: ImageSourcePropType;
  text: string;
  style?: string
}

const CategoryCard: React.FC<Props> = (props: Props) => {
  const { image, text, style } = props;

  return (
    <TouchableOpacity className={"items-center mb-5"}>
      <Image source={image} className="m-3" />
      <Text className="text-black">{text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
