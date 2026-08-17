import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Divider, Metric, Page, s } from './ui';
export default function Earnings({ go }) { return <Page title="Ganhos" go={go} nav="Earnings"><Text style={s.muted}>Total da semana</Text><Text style={{fontSize:31,fontWeight:'900'}}>R$ 650,00</Text><Text style={{color:'#22a05b',fontWeight:'800',fontSize:12}}>▲ 12% em relacao a semana anterior</Text><Card><Text style={{fontWeight:'800'}}>Detalhamento</Text><Metric label="Corridas" value="R$ 800,00"/><Metric label="Promocoes" value="R$ 50,00"/><Metric label="Taxas" value="- R$ 80,00"/><Divider/><Metric label="Saldo disponivel" value="R$ 132,50" strong/></Card><Button onPress={() => go('Home')}>Sacar agora</Button></Page>; }
