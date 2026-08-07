import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Field, Page, s } from './ui';

const opts = ['Hospital São Lucas', 'Shopping Jardins', 'Mercado Central', 'Rodoviária'];

export default function SearchDestination({ go }) {
  return (
    <Page title="Para onde vamos?" go={go}>
      <Field placeholder="🔎  Pesquisar destino" />

      <Text style={s.h2}>Sugestões</Text>
      {opts.map((item) => (
        <Card key={item}>
          <Text style={{ fontWeight: '700' }}>📍 {item}</Text>
          <Text style={s.muted}>Rua das Palmeiras, 200</Text>
        </Card>
      ))}

      <Button onPress={() => go('Schedule')} light>
        ⌖ Usar localização atual
      </Button>
    </Page>
  );
}
