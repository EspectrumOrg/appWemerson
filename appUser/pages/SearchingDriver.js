import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Page, s } from './ui';

export default function SearchingDriver({ go }) {
  return (
    <Page title="Buscando motorista" go={go} back="Category">
      <View
        style={{
          height: 280,
          backgroundColor: '#dcebe5',
          borderRadius: 14,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 56 }}>🚗</Text>
        <Text style={{ fontWeight: '700', fontSize: 17 }}>Motorista a caminho</Text>
        <Text style={s.muted}>Chegada prevista em 8 min · 2,1 km</Text>
      </View>

      <Card>
        <Text style={{ fontWeight: '700' }}>👨🏽 Carlos Lima · ⭐ 4,8</Text>
        <Text style={s.muted}>Chevrolet Onix · Prata · ABC1D23</Text>
      </Card>

      <Card>
        <Text>📍 Praça da Matriz</Text>
        <Text>📍 Hospital São Lucas</Text>
      </Card>

      <Button onPress={() => go('Payment')}>Finalizar viagem</Button>
    </Page>
  );
}
