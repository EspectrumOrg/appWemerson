import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Location, MapPreview, Page, ride, s } from './ui';
export default function StartRide({ go }) { return <Page title="Iniciar corrida" go={go} back="RideAccepted"><Card><Text style={{fontWeight:'800'}}>Chegou ao local de embarque?</Text><Text style={s.muted}>Inicie a corrida para comecar.</Text></Card><MapPreview/><Card><Location title={ride.origin} detail={ride.originArea}/></Card><Button onPress={() => go('Trip')}>Iniciar corrida</Button><Button light onPress={() => go('Home')}>Cancelar corrida</Button></Page>; }
