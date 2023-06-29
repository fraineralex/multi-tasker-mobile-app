import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';
import axios from 'axios';
import { darkMode } from '../utils/theme/themeColors';

const GenderPredictionScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      setGender(response.data.gender);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderPredictionResult = () => {
    if (gender === 'male') {
      return <Text style={[styles.resultText, { color: darkMode.blue, padding:10 }]}>Your gender is Male!</Text>;
    } else if (gender === 'female') {
      return <Text style={[styles.resultText, { color: darkMode.pink }]}>Your gender is Female!</Text>;
    } else {
      return <Text style={styles.resultText}>Gender couldn't be determined.</Text>;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: darkMode.secondary }]}>I'll Predict Your Gender</Text>
        <TextInput
          style={[styles.input, { color: darkMode.secondary, borderColor: darkMode.secondary }]}
          placeholder="Enter a name"
          placeholderTextColor={darkMode.tabInactive}
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: darkMode.blue }]} onPress={predictGender}>
          <Text style={styles.buttonText}>Predict Gender</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { backgroundColor: darkMode.tabInactive }]}>
              {renderPredictionResult()}
              <TouchableOpacity style={[styles.button, { backgroundColor: darkMode.primary, marginTop:10 }]} onPress={closeModal}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default GenderPredictionScreen;
