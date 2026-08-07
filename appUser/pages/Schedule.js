import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Page, s } from './ui';

export default function Schedule({ go }) {
  return (
    <Page title="Data e horário" go={go} back="SearchDestination">
      <Text style={s.h2}>Quando você deseja viajar?</Text>

      <Card>
        <Text>◯ Agora</Text>
        <Text style={{ color: '#087a50', marginTop: 12 }}>● Agendar</Text>
      </Card>

      <Text style={s.muted}>Data</Text>
      <Card>
        <Text>16/05/2024 📅</Text>
      </Card>

      <Text style={s.muted}>Horário</Text>
      <Card>
        <Text>07:30 ◷</Text>
      </Card>

      <Button onPress={() => go('MeetingPoint')}>Continuar</Button>
    </Page>
  );
}
