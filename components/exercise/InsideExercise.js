import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import BackHeader from '../header/BackHeader';

const InsideExercise = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
    }, [navigation]);
  return (
    <View style={styles.lagayan}>
        <BackHeader />
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ENDURANCE</Text>
      <Text style={styles.paragraph}>
        Endurance exercise includes activities that increase your breathing and heart rate such as walking, jogging, swimming, biking, and jumping rope. Endurance activity keeps your heart, lungs, and circulatory system healthy and improves your overall fitness.
      </Text>

      <Text style={styles.subTitle}>WALKING</Text>
      <Text style={styles.paragraph}>
        Walking endurance exercises in PE focus on cardiovascular health, stamina, and muscular endurance through sustained walking. It’s a low-impact aerobic activity for all fitness levels. Students walk continuously for 20-60 minutes, with variations in speed or terrain to increase challenge. A warm-up and cool-down prevent injury and improve flexibility. The goal is to build endurance over time by increasing duration or intensity, promoting long-term fitness.
      </Text>

      <Text style={styles.subTitle}>JOGGING</Text>
      <Text style={styles.paragraph}>
        Jogging endurance exercises in PE aim to improve cardiovascular fitness, stamina, and muscular endurance through sustained, moderate-intensity jogging. Students jog continuously for 15-45 minutes at a steady pace, with variations in speed or terrain to increase difficulty. A warm-up and cool-down are included to prevent injury. The goal is to build endurance and aerobic capacity over time, promoting overall fitness.
      </Text>

      <Text style={styles.subTitle}>SWIMMING</Text>
      <Text style={styles.paragraph}>
        Swimming endurance is a great way to improve overall health and fitness. It offers cardiovascular benefits, strengthens muscles, increases flexibility, and boosts mental well-being. To build swimming endurance, focus on proper technique, consistent practice, interval training, cross-training, and proper nutrition.
      </Text>

      <Text style={styles.subTitle}>BIKING</Text>
      <Text style={styles.paragraph}>
        Biking endurance is a great way to improve overall health and fitness. It offers cardiovascular benefits, strengthens muscles, helps with weight management, boosts mental well-being, and is environmentally friendly. To build biking endurance, focus on proper bike fit, consistent practice, interval training, cross-training, and proper nutrition.
      </Text>

      <Text style={styles.subTitle}>JUMPING ROPE</Text>
      <Text style={styles.paragraph}>
        Jumping rope is a simple yet effective exercise that can significantly improve cardiovascular fitness, coordination, and agility. It’s a great way to burn calories, tone muscles, and enhance overall athletic performance. Jumping rope is a fun and accessible exercise that can be enjoyed by people of all ages and fitness levels. By incorporating it into your workout routine, you can improve your overall health, fitness, and athletic performance.
      </Text>

      <Text style={styles.title}>STRENGTH</Text>
      <Text style={styles.paragraph}>
        Students can work on their strength and power by including exercises such as squats, push-ups, pull-ups, lunges, and jumps as part of the obstacles. By incorporating these exercises, students can develop their muscular strength and power while also improving their endurance, balance, and coordination.
      </Text>

      <Text style={styles.subTitle}>SQUAT</Text>
      <Text style={styles.paragraph}>
        The squat is a fundamental strength exercise that targets the muscles of the lower body, particularly the quadriceps, hamstrings, glutes, and calves. It’s also great for improving core strength and stability. Squats can be done with or without weights, depending on your fitness level and goals.
      </Text>

      <Text style={styles.subTitle}>PUSH-UPS</Text>
      <Text style={styles.paragraph}>
        Push-ups are used to build muscular strength and endurance, and they can be modified for all fitness levels. In Physical Education (PE), a push-up is a common bodyweight exercise designed to strengthen the upper body, especially the chest, shoulders, triceps, and core.
      </Text>

      <Text style={styles.subTitle}>PULL-UPS</Text>
      <Text style={styles.paragraph}>
        Pull-ups are excellent for building upper body strength, improving grip, and enhancing muscular endurance. A pull-up is a strength-building exercise commonly included in Physical Education (PE) programs to target the upper body muscles, particularly the back, shoulders, and arms.
      </Text>

      <Text style={styles.subTitle}>LUNGES</Text>
      <Text style={styles.paragraph}>
        The lunge is a common exercise in physical education (PE) that primarily targets the lower body, particularly the quadriceps, hamstrings, glutes, and calves. It also helps improve balance and core stability.
      </Text>

      <Text style={styles.subTitle}>JUMP SQUAT</Text>
      <Text style={styles.paragraph}>
        Jumping exercises, often called “plyometrics,” are popular in physical education (PE) for improving explosive power, coordination, and cardiovascular fitness. They target muscles in the legs, core, and sometimes even the upper body, depending on the variation.
      </Text>

      <Text style={styles.title}>WARM-UPS</Text>
      <Text style={styles.paragraph}>
        A warm-up is a crucial part of physical education, helping to prepare the body for more intense activity while reducing the risk of injury. A good warm-up typically starts with light cardiovascular exercises, such as jogging or jumping jacks, to gradually raise the heart rate and increase blood flow to the muscles.
      </Text>

      <Text style={styles.subTitle}>ARM CIRCLE</Text>
      <Text style={styles.paragraph}>
        Arm circles are a simple yet effective warm-up exercise that targets the shoulder muscles, upper arms, and upper back. This movement helps to increase blood flow to the shoulder joints, improve mobility, and reduce the risk of injury during physical activity.
      </Text>

      <Text style={styles.subTitle}>JUMPING JACKS</Text>
      <Text style={styles.paragraph}>
        Jumping Jacks are a classic, full-body exercise that serves as an excellent warm-up activity. They help increase heart rate, improve cardiovascular endurance, and engage various muscle groups, including the legs, core, and arms.
      </Text>

      <Text style={styles.subTitle}>NECK ROTATION</Text>
      <Text style={styles.paragraph}>
        Recommended by Greaves, neck rotations are great for those who spend excess time staring down at a computer or phone screen for work. The gentle movement opens up the neck and shoulders to prevent injury and gets some blood flowing.
      </Text>

      <Text style={styles.subTitle}>LEG SWINGS</Text>
      <Text style={styles.paragraph}>
        Leg Swings are a dynamic stretching exercise that helps improve hip mobility, flexibility, and balance. This movement is particularly beneficial for warming up the hip flexors, hamstrings, and glutes.
      </Text>

      <Text style={styles.subTitle}>TOUCHES</Text>
      <Text style={styles.paragraph}>
        Toe Touches are a simple yet effective stretching exercise that helps improve flexibility in the hamstrings, lower back, and calves.
      </Text>

      <Text style={styles.title}>BALANCE</Text>
      <Text style={styles.subTitle}>SINGLE-LEG STAND</Text>
      <Text style={styles.paragraph}>
        The single-leg stand is a fundamental balance exercise that tests your static balance and lower-body stability. It’s beneficial for identifying imbalances between your left and right sides.
      </Text>

      <Text style={styles.subTitle}>SINGLE-LEG DEADLIFT</Text>
      <Text style={styles.paragraph}>
        The single-leg deadlift tests your static balance and lower-body stability while engaging stabilizing muscles in your ankles, knees, and hips.
      </Text>

      <Text style={styles.subTitle}>DEAD BUG EXERCISE</Text>
      <Text style={styles.paragraph}>
        The Dead Bug exercise targets the abdominal muscles while promoting coordination and proper movement patterns.
      </Text>

      <Text style={styles.subTitle}>BULGARIAN SPLIT SQUAT</Text>
      <Text style={styles.paragraph}>
        The Bulgarian Split Squat is an effective lower body exercise that targets the quadriceps, hamstrings, glutes, and core.
      </Text>

      <Text style={styles.subTitle}>SINGLE-LEG GLUTE BRIDGE</Text>
      <Text style={styles.paragraph}>
        The Single-Leg Glute Bridge primarily targets the glutes, hamstrings, and core, improving lower body strength, stability, and balance.
      </Text>

      <Text style={styles.title}>FLEXIBILITY</Text>
      <Text style={styles.subTitle}>SIDE STRETCH</Text>
      <Text style={styles.paragraph}>
        The Side Stretch exercise is a simple yet effective way to improve flexibility in the sides of the body, including the obliques, lats, and intercostal muscles.
      </Text>

      <Text style={styles.subTitle}>TRICEP STRETCH</Text>
      <Text style={styles.paragraph}>
        The Tricep Stretch targets the triceps muscles and helps improve flexibility in the arms and shoulders.
      </Text>

      <Text style={styles.subTitle}>CROSS-BODY SHOULDER STRETCH</Text>
      <Text style={styles.paragraph}>
        The Cross-Body Shoulder Stretch is an effective way to improve flexibility in the shoulders and upper back.
      </Text>

      <Text style={styles.subTitle}>SEATED FORWARD BEND</Text>
      <Text style={styles.paragraph}>
        The Seated Forward Bend is a calming yoga pose that stretches the spine, hamstrings, and calves, promoting flexibility and relaxation.
      </Text>

      <Text style={styles.subTitle}>COBRA STRETCH</Text>
      <Text style={styles.paragraph}>
        The Cobra Stretch is a popular yoga pose that improves flexibility in the spine, chest, and shoulders while stretching the abdominal muscles.
      </Text>

      <Text style={styles.subTitle}>HIP FLEXOR STRETCH</Text>
      <Text style={styles.paragraph}>
        The Hip Flexor Stretch targets the hip flexors and quadriceps, promoting flexibility and reducing tightness in the hip area.
      </Text>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    lagayan: {
        flex: 1,
        backgroundColor: '#F6F1F7',
        },
  container: {
    padding: 20,
    backgroundColor: '#F6F1F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#690981',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 5,
    color: '#690981',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 3,
    lineHeight: 24,
  },
});

export default InsideExercise;
