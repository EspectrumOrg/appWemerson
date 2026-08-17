import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Divider, Location, MapPreview, Metric, Page, orange, ride } from './ui';
export default function RideDetails({ go }) { return <Page title="Detalhes da corrida" go={go} back="NewRequest"><MapPreview/><Card><Location title={ride.origin} detail={ride.originArea}/><Location color={orange} title={ride.destination} detail={ride.destinationArea}/><Divider/><Metric label="Distancia" value={ride.distance}/><Metric label="Tempo estimado" value={ride.duration}/><Divider/><Metric label="Valor estimado" value={ride.price} strong/><Text>Pagamento: Cartao</Text></Card><Button onPress={() => go('RideAccepted')}>Aceitar corrida</Button></Page>; }
