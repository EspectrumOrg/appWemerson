import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Button, Field, green, s } from './ui';

export default function Login({ go }) {
  return (
    <View style={x.page}>
      <View style={x.hero}>
        <Text style={x.logo}>📍 InteriorGo</Text>
        <Text style={x.road}>🚗 🏘️</Text>
      </View>

      <View style={x.form}>
        <Text style={s.h2}>Bem-vindo(a)!</Text>
        <Text style={s.muted}>Entre para continuar</Text>

        <Field placeholder="E-mail ou telefone" />
        <Field placeholder="Senha" secureTextEntry />

        <Text style={x.link}>Esqueceu a senha?</Text>
        <Button onPress={() => go('Home')}>Entrar</Button>

        <Text style={x.or}>ou entre com</Text>
        <Pressable style={x.social}>
          <Text>ⓖ Google | ● Facebook</Text>
        </Pressable>

        <Text style={x.signup}>
          Não tem uma conta?{' '}
          <Text style={x.link} onPress={() => go('Register')}>
            Cadastre-se
          </Text>
        </Text>
      </View>
    </View>
  );
}

const x = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    height: '42%',
    backgroundColor: '#edf7f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontWeight: '800',
    fontSize: 29,
    color: green,
  },
  road: {
    fontSize: 42,
    marginTop: 30,
  },
  form: {
    flex: 1,
    padding: 24,
    gap: 13,
  },
  link: {
    color: green,
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'right',
  },
  or: {
    textAlign: 'center',
    color: '#75827c',
    fontSize: 12,
  },
  social: {
    borderWidth: 1,
    borderColor: '#e2e9e5',
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
  },
  signup: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6b7771',
  },
});
