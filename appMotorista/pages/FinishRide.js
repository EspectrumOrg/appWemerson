import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Divider, Location, MapPreview, Page, ride, s } from './ui';
export default function FinishRide({ go }) { return <Page title="Finalizar corrida" go={go} back="Trip"><MapPreview/><Text style={{fontSize:21,fontWeight:'900',textAlign:'center'}}>Chegou ao destino!</Text><Text style={[s.muted,{textAlign:'center'}]}>Finalize a corrida para receber o pagamento.</Text><Card><Location title={ride.destination} detail={ride.destinationArea}/><Divider/><Text style={s.muted}>Valor da corrida</Text><Text style={{fontSize:24,fontWeight:'900'}}>{ride.price}</Text><Text>Pagamento: Cartao</Text></Card><Button onPress={() => go('RatePassenger')}>Finalizar corrida</Button></Page>; }
