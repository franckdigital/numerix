// Dans le fichier App
import React from 'react';
import { KkiapayProvider } from '@kkiapay-org/react-native-sdk';

import TestComponent from './TestComponent';

export default function MobileMoney() {
  return (
    <KkiapayProvider>
      <TestComponent />
    </KkiapayProvider>
  );
}