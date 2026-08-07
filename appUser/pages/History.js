import React from 'react';
import { Text, View } from 'react-native';
import { Card, Nav, Page, s } from './ui';

const rides = [
  ['Hoje, 08:41', 'Praça da Matriz → Shopping Jardins', 'R$ 11,90'],
  ['Ontem, 17:32', 'Rua das Palmeiras → Mercado Central', 'R$ 9,50'],
  ['10/05, 14:10', 'Supermercado Bom Preço', 'R$ 13,40'],
];

export default function History({ go }) {
  return (
    <View style={{ flex: 1 }}>
      <Page title="Histórico" go={go}>
        {rides.map((ride) => (
          <Card key={ride[0]}>
            <Text style={{ color: '#087a50', fontWeight: '700' }}>{ride[0]}</Text>
            <Text>{ride[1]}</Text>
            <Text style={[s.muted, { textAlign: 'right' }]}>{ride[2]}</Text>
          </Card>
        ))}
      </Page>
      <Nav go={go} active="History" />
    </View>
  );
}
