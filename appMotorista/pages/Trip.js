import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Card, MapPreview, Page, ride, s } from './ui';
export default function Trip({ go }) { return <Page title="Em viagem" go={go} back="StartRide"><Card><Text style={{fontWeight:'800'}}>Rumo ao destino</Text><Text style={s.muted}>{ride.destination}</Text></Card><MapPreview/><Card><Text style={s.muted}>Chegada prevista</Text><Text style={{fontWeight:'800'}}>10 min - {ride.distance}</Text><View style={{flexDirection:'row',alignItems:'center',gap:10,marginTop:8}}><Avatar initials="AS"/><Text style={{fontWeight:'800',flex:1}}>{ride.passenger}</Text><Text style={{color:'#087a50'}}>★ 4,9</Text></View></Card><Button onPress={() => go('FinishRide')}>Cheguei ao destino</Button></Page>; }
