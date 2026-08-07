import React from 'react';
import { Text } from 'react-native';
import { Button, Field, Page, s } from './ui';

export default function Register({ go }) {
  return (
    <Page title="Criar conta" go={go} back="Login">
      <Text style={s.muted}>Vamos criar sua conta</Text>
      <Field placeholder="Nome completo" />
      <Field placeholder="E-mail" />
      <Field placeholder="Telefone" />
      <Field placeholder="Senha" secureTextEntry />
      <Field placeholder="Confirmar senha" secureTextEntry />

      <Text style={s.muted}>
        ☐ Li e aceito os Termos de Uso e a Política de Privacidade
      </Text>

      <Button onPress={() => go('Home')}>Criar conta</Button>
      <Text style={[s.muted, { textAlign: 'center' }]}>Já tem conta? Entre</Text>
    </Page>
  );
}
