import React from 'react';
import { Text, TextInput } from 'react-native';
import { Button, Card, Page, s } from './ui';

export default function RateDriver({ go }) {
  return (
    <Page title="Avaliar motorista" go={go} back="Payment">
      <Card>
        <Text style={{ fontWeight: '700' }}>👨🏽 Carlos Lima · ⭐ 4,8</Text>
        <Text style={s.muted}>Chevrolet Onix · Prata</Text>
      </Card>

      <Text style={[s.h2, { textAlign: 'center' }]}>Como foi sua viagem?</Text>
      <Text style={{ fontSize: 36, textAlign: 'center', color: '#f4b400' }}>★★★★★</Text>

      <Text style={s.muted}>Deixe um comentário (opcional)</Text>
      <TextInput
        style={{
          height: 110,
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 14,
          textAlignVertical: 'top',
        }}
        placeholder="Conte como foi sua experiência."
        multiline
      />

      <Button onPress={() => go('Home')}>Enviar avaliação</Button>
    </Page>
  );
}
