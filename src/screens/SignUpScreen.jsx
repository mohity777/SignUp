import {View, Pressable, ScrollView, Image, Text, Keyboard} from 'react-native';
import Header from '../components/Header';
import {tw} from '../../tw';
import CustomInput from '../components/CustomInput';
import {Formik} from 'formik';
import CompetitionsModal from '../components/CompetitionsModal';
import {useState} from 'react';
import {signUpValidationSchema} from '../utils/constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ErrorText from '../components/ErrorText';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [competitionModalVisible, setCompetitionModalVisible] = useState(false);
  const {navigate} = useNavigation();

  return (
    <View style={tw`flex-1 bg-white`}>
      <Header />
      <Formik
        initialValues={{
          competition: '',
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          termsConditions: false,
        }}
        validationSchema={signUpValidationSchema}
        validateOnChange={true}
        onSubmit={_ => {
          navigate('SignUpSuccess');
        }}>
        {({
          values,
          setFieldTouched,
          errors,
          handleChange,
          touched,
          setFieldValue,
          handleSubmit,
        }) => (
          <View style={tw`flex-1 p-5 pb-5`}>
            <ScrollView>
              <Pressable
                onPress={() => {
                  setCompetitionModalVisible(true);
                  setFieldTouched('competition');
                }}>
                <CustomInput
                  value={values.competition}
                  editable={false}
                  enableIcon={true}
                  iconImageSource={require('../../assets/images/downIcon.png')}
                  placeholder="Competition to sign up *"
                  error={touched.competition && errors.competition}
                  selection={{start: 0, end: 0}}
                  style={tw`mb-5`}
                />
              </Pressable>

              <CustomInput
                value={values.email}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                error={touched.email && errors.email}
                style={tw`mb-5`}
              />

              <CustomInput
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                error={touched.password && errors.password}
                style={tw`mb-5`}
                enableIcon={true}
              />

              <CustomInput
                value={values.confirmPassword}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                error={touched.confirmPassword && errors.confirmPassword}
                style={tw`mb-5`}
                enableIcon={true}
              />

              <CustomInput
                value={values.firstName}
                placeholder="First Name in English *"
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
                error={touched.firstName && errors.firstName}
                style={tw`mb-5`}
              />

              <CustomInput
                value={values.lastName}
                placeholder="Last Name in English *"
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
                error={touched.lastName && errors.lastName}
                style={tw`mb-5`}
              />

              <CompetitionsModal
                visible={competitionModalVisible}
                setVisible={setCompetitionModalVisible}
                onChangeCompetitions={handleChange('competition')}
                style={tw`mb-5`}
              />
            </ScrollView>

            <Pressable style={tw`my-5`} onPress={Keyboard.dismiss}>
              <View style={tw`flex-row`}>
                <BouncyCheckbox
                  size={24}
                  fillColor="#D3D8FF"
                  innerIconStyle={tw`rounded-sm`}
                  iconStyle={tw`rounded-sm`}
                  isChecked={values.termsConditions}
                  onPress={isChecked => {
                    setFieldValue('termsConditions', isChecked, true);
                  }}
                />
                <Text
                  style={tw`font-plusJakartaSansRegular text-[#475467] text-sm`}>
                  By signing up, I agree to Cloit's Terms &
                  Conditions and Privacy Policy.
                </Text>
              </View>
              <ErrorText
                error={touched.termsConditions && errors.termsConditions}
              />
            </Pressable>

            <Pressable
              onPress={() => {
                handleSubmit();
                Keyboard.dismiss();
              }}>
              <Image
                source={require('../../assets/images/signUpBtn.png')}
                style={tw`w-full h-[52px]`}
                resizeMode="stretch"
              />
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;
