import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Page, s } from './ui';
const rides=[['Hoje, 08:41','Praca da Matriz → Shopping Jardins','R$ 14,50'],['Ontem, 17:32','Rua das Palmeiras → Mercado Central','R$ 9,50'],['10/05, 14:10','Supermercado Bom Preco → Av. Brasil','R$ 13,40']];
export default function History({ go }) { return <Page title="Historico" go={go} nav="History"><Text style={{fontWeight:'800'}}>Todas   Concluidas   Canceladas</Text>{rides.map(([date,route,value]) => <Card key={date}><Text style={{color:'#087a50',fontWeight:'800'}}>{date}</Text><Text>{route}</Text><Text style={[s.muted,{textAlign:'right'}]}>{value}</Text></Card>)}<Button onPress={() => go('Schedule')}>Ver agenda</Button></Page>; }
