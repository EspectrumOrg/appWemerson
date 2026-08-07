import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Page, s } from './ui';

const categories = [
  ['🚗', 'Econômico', 'Até 4 minutos', 'R$ 14,50'],
  ['🚙', 'Conforto', 'Até 6 minutos', 'R$ 19,90'],
  ['🚐', 'Família', 'Até 7 minutos', 'R$ 24,90'],
  ['🚘', 'Utilitário', 'Ideal para compras', 'R$ 29,90'],
];

export default function Category({ go }) {
  return (
    <Page title="Escolha a categoria" go={go} back="Beneficiary">
      {categories.map(([icon, title, desc, price], index) => (
        <Card
          key={title}
          style={index === 0 ? { borderWidth: 2, borderColor: '#087a50' } : {}}
        >
          <View style={s.row}>
            <Text style={{ fontSize: 28 }}>{icon}</Text>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontWeight: '700' }}>{title}</Text>
              <Text style={s.muted}>{desc}</Text>
            </View>
            <Text style={{ fontWeight: '700' }}>{price}</Text>
          </View>
        </Card>
      ))}
      <Button onPress={() => go('SearchingDriver')}>Confirmar categoria</Button>
    </Page>
  );
}
