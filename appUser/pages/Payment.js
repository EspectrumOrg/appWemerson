import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Page, s } from './ui';

export default function Payment({ go }) {
  return (
    <Page title="Pagamento" go={go} back="SearchingDriver">
      <Text style={s.muted}>Valor da corrida</Text>
      <Text style={{ fontWeight: '800', fontSize: 27 }}>R$ 14,50</Text>

      <Text style={s.h2}>Forma de pagamento</Text>
      {['●  •••• 1234 (Padrão)    🟠', '○  •••• 5678             VISA', '○  •••• 9101             Mastercard', '○  Dinheiro'].map((item) => (
        <Card key={item}>
          <Text>{item}</Text>
        </Card>
      ))}

      <Text style={{ color: '#087a50', fontWeight: '700' }}>Adicionar método</Text>
      <Button onPress={() => go('RateDriver')}>Confirmar pagamento</Button>
    </Page>
  );
}
