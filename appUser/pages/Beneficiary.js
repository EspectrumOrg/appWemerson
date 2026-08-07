import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Field, Page, s } from './ui';

export default function Beneficiary({ go }) {
  return (
    <Page title="Para quem é a corrida?" go={go} back="MeetingPoint">
      <Card>
        <Text>◯ Para mim</Text>
        <Text style={{ color: '#087a50', marginTop: 12 }}>
          ● Para outra pessoa
        </Text>
      </Card>

      <Text style={s.muted}>Nome completo</Text>
      <Field placeholder="João da Silva" />

      <Text style={s.muted}>Telefone</Text>
      <Field placeholder="(11) 98888-8888" />

      <Text style={s.muted}>◉ O motorista verá essas informações.</Text>
      <Button onPress={() => go('Category')}>Confirmar</Button>
    </Page>
  );
}