import React from 'react';
import { Header, Left, Icon, Body, Right } from 'native-base';
import { Text } from 'react-native';

export default function CustomHeader(props) {
    return (
        <Header style={{
            height: 70,
            paddingTop: 20,
            alignSelf: 'flex-end'
        }}>
            <Left>
                <Icon name="person" style={{ color: '#fff' }} />
            </Left>
            <Body>
                <Text style={{ 
                        alignSelf: 'center', 
                        fontSize: 20, 
                        color: 'white', 
                        fontWeight: 'bold' }}>
                        {props.title}
                </Text>
            </Body>
            <Right>
                <Icon name="exit" style={{ color: '#fff' }} />
            </Right>
        </Header>
    )
}