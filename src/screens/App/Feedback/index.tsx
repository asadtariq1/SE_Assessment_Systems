import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import SimpleHeader from '../../../components/Headers/SimpleHeader';
import TextinputsWithTitle from '../../../components/Textinputs/TextinputsWithTitle';
import { Rating } from '@kolking/react-native-rating';
import SimpleButton from '../../../components/Buttons/SimpleButton';
import { _storeMultipleData, _retrieveMultipleData } from '../../../services/AsyncStorage';

interface FeedbackProps {
  navigation: any;
  route: any;
}

const Feedback: React.FC<FeedbackProps> = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { prevItem } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onPressSubmit = async () => {
    if (name === '') {
      Toast.showWithGravity('Please enter full name', Toast.LONG, Toast.BOTTOM);
    } else if (email === '') {
      Toast.showWithGravity('Please enter email', Toast.LONG, Toast.BOTTOM);
    } else if (rating === 0) {
      Toast.showWithGravity('Please rate 1 - 5', Toast.LONG, Toast.BOTTOM);
    } else if (!emailRegex.test(email)) {
      Toast.showWithGravity('Please enter a valid email address.', Toast.LONG, Toast.BOTTOM);
    } else {
      setIsLoading(true);
      let arr = await _retrieveMultipleData('userFeedback');
      let obj = {
        id: prevItem?.id,
        name: name,
        email: email,
        feedback: feedback,
        rating: rating
      };
      if (arr) {
        arr.push(obj);
        await _storeMultipleData('userFeedback', arr);
        Toast.showWithGravity('Feedback Successfully stored!', Toast.LONG, Toast.BOTTOM);
        setIsLoading(false);
        navigation.goBack();
      } else {
        await _storeMultipleData('userFeedback', [obj]);
        Toast.showWithGravity('Feedback Successfully stored!', Toast.LONG, Toast.BOTTOM);
        setIsLoading(false);
        navigation.goBack();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={isLoading}
        size={'small'}
        overlayColor={'rgba(0, 0, 0, 0.8)'}
      />

      <SimpleHeader
        title={'Feedback'}
        isBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.bodyContainer}>
        <TextinputsWithTitle
          onChangeText={(text: string) => setName(text)}
          placeholder={'Enter Name'}
          value={name}
          title={'Full Name'}
          isEmail={false}
          isMultiline={false}
        />

        <TextinputsWithTitle
          onChangeText={(text: string) => setEmail(text)}
          placeholder={'Enter Email'}
          value={email}
          title={'Email Address'}
          isEmail={true}
          isMultiline={false}
        />

        <Rating
          size={35}
          rating={rating}
          style={styles.ratingContainer}
          onChange={(value: number) => setRating(value)} />

        <TextinputsWithTitle
          onChangeText={(text: string) => setFeedback(text)}
          placeholder={'Enter Feedback'}
          value={feedback}
          title={'Feedback'}
          isEmail={false}
          isMultiline={true}
        />

        <SimpleButton title={'Submit'} onPress={() => onPressSubmit()} />
      </View>

    </View>
  );
};

export default Feedback;