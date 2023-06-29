import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, Image, Modal, Pressable } from 'react-native';
import axios from 'axios';

// Dark Mode Colors
const darkMode = {
  primary: '#000000',
  secondary: '#FFFFFF',
  tabActive: '#FFFFFF',
  tabInactive: '#CCCCCC',
  headerText: '#FFFFFF',
  headerBackground: '#000000',
  blue: '#4287f5',
  pink: '#ff1493',
};

const AgePredictionScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      setAge(response.data.age);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const renderAgeMessage = () => {
    if (age === null) {
      return <Text style={styles.resultText}>Age couldn't be determined.</Text>;
    } else if (age < 18) {
      return (
        <View>
          <Image source={{ uri: 'https://www.bing.com/images/search?view=detailV2&ccid=BvQlpZtg&id=2A355F9E49B105C75FD271E48DB7BF93F81FE11D&thid=OIP.BvQlpZtgmOcASQwVkh1AigHaKc&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fb%2fportrait-young-man-28060171.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.06f425a59b6098e700490c15921d408a%3frik%3dHeEf%252bJO%252ft43kcQ%26pid%3dImgRaw%26r%3d0&exph=900&expw=638&q=young+man&simid=608021680031405420&FORM=IRPRST&ck=F6074E5860B93868A20B24D2C150A9DA&selectedIndex=3' }} style={styles.image} />
          <Text style={[styles.resultText, { color: darkMode.primary }]}>Young ({age} years)</Text>
        </View>
      );
    } else if (age >= 18 && age <= 60) {
      return (
        <View>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.z-3Ngpt7EyX5W7HD1-Bc7gHaKk?w=182&h=259&c=7&r=0&o=5&dpr=1.3&pid=1.7' }} style={styles.image} />
          <Text style={[styles.resultText, { color: darkMode.primary }]}>Adult ({age} years)</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.u2V3FtR3Jhs3WCwipS8XBx8QHaFj?w=268&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7' }} style={styles.image} />
          <Text style={[styles.resultText, { color: darkMode.primary }]}>Elderly ({age} years)</Text>
        </View>
      );
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: darkMode.secondary }]}>I'll Predict Your Age</Text>
        <TextInput
          style={[styles.input, { color: darkMode.secondary, borderColor: darkMode.secondary }]}
          placeholder="Enter a name"
          placeholderTextColor={darkMode.tabInactive}
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: darkMode.blue }]} onPress={predictAge}>
          <Text style={styles.buttonText}>Predict Age</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {renderAgeMessage()}
              <Pressable style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: darkMode.secondary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: darkMode.secondary,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: darkMode.blue,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: darkMode.secondary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AgePredictionScreen;
