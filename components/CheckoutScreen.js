import React, {useState, useEffect} from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';

import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import {useStripe} from '@stripe/stripe-react-native';

const CheckoutScreen = ({navigation}) => {
  const API_URL = 'http://192.168.182.85:3000';
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);


  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {clientSecret, customer} = await response.json();

    return {
      clientSecret,
      customer,
    };
  };
  const initializePaymentSheet = async () => {
    const {clientSecret, customer} = await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      customerId: customer,
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Merchant Name',
    });
    if (!error) {
      setLoading(true);
    }
  };
  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();
    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Nous avons reçu vos frais de consultation, vous serez redirigé vers la page de consultation', [{text: "OK", onPress: () => {navigation.navigate('Teleconsultation')}}]);
    }
  };
  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <StripeProvider publishableKey="pk_test_51OslP6GCqNHHPjMI1pXPQAEtek14JpA8e7UCTGOkMVSTeaPocFXAQ7HrfjiTLOyYdNCe8lMQs6t0WOLb1kY4SFbn00Eml9fFOw">
      <View style={styles.container}>
        {!loading ? (
          <Text style={{color: 'black'}}>Loading...</Text>
        ) : (
          <Button
            style={styles.button}
            disabled={!loading}
            title="Procéder au paiement"
            color="#841584"
            onPress={openPaymentSheet}
          />
        )}
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: 100,
    marginVertical: 100,
    top: '30%'
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
  },
});

export default CheckoutScreen;