
import { View, Text } from 'react-native'
import Header from '../header/Header'
import DashboardWave from '../DashboardWave'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import UserAgreement from './UserAgreement';
import TPCLayout from './TPCLayout';

const Help = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
  return (
    <View>
        <Header navigation={navigation} />
        <DashboardWave /> 
        <UserAgreement />
        <TPCLayout />
    </View>
  )
}

export default Help