import React from 'react';
import { Text } from 'react-native';
import { Avatar, Button, Card, Page, s } from './ui';
const options=['Veiculo','Documentos','Dados bancarios','Area de atendimento','Notificacoes','Seguranca'];
export default function Profile({ go }) { return <Page title="Perfil" go={go} nav="Profile"><Card style={{backgroundColor:'#075c3e',flexDirection:'row',alignItems:'center',gap:12}}><Avatar/><Text style={{color:'#fff',fontSize:17,fontWeight:'900',flex:1}}>Carlos Lima{`\n`}<Text style={{color:'#d7efe3',fontSize:12,fontWeight:'400'}}>(11) 99999-9999</Text></Text><Text style={{color:'#fff'}}>★ 4,8</Text></Card>{options.map(option=><Card key={option}><Text style={{fontWeight:'700'}}>{option}  ›</Text></Card>)}<Button danger onPress={() => go('Login')}>Sair da conta</Button></Page>; }
