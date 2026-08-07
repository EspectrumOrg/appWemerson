import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Page, s } from './ui';

export default function MeetingPoint({ go }) {
  return (
    <Page title="Ponto de encontro" go={go} back="Schedule">
      <View
        style={{
          height: 180,
          backgroundColor: '#dcebe5',
          borderRadius: 14,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 44 }}>📍</Text>
        <Text style={{ fontWeight: '700' }}>Praça da Matriz</Text>
      </View>

      <Text style={s.h2}>Pontos sugeridos</Text>
      {['●  Praça da Matriz (recomendado)', '○  Rodoviária', '○  Igreja Matriz', '○  Shopping Jardins'].map((item) => (
        <Card key={item}>
          <Text>{item}</Text>
        </Card>
      ))}

      <Button onPress={() => go('Beneficiary')}>Confirmar ponto</Button>
    </Page>
  );
}
