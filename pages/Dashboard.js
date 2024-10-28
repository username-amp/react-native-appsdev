import { View, SafeAreaView } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header/Header';
import DashboardWave from '../components/DashboardWave';
import DashboardContent from '../components/dashboard/DashboardContent';
import UserSwipeIndication from '../components/popup/UserSwipeIndication';

const Dashboard = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <DashboardWave />
      <DashboardContent />
      <UserSwipeIndication />
    </SafeAreaView>
  );
};

export default Dashboard;
