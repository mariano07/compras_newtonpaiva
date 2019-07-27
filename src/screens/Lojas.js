import React from 'react';
import { Container, Header, Left, Icon, Body, Title, Right, Content, Text } from 'native-base';
import { Font, AppLoading } from 'expo';
import { FlatList, StyleSheet } from 'react-native';
import LojaCard from '../components/LojaCard';

export default class Lojas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            lojas: [
                { "id": 1, "name": "Casas Bahiana", "img": "https://bcassetcdn.com/asset/logo/a8379ec2-1173-4ce4-b346-4c587a145dfc/logo?v=4&text=Logo+Text+Here" },
                { "id": 2, "name": "Ponto Quente", "img": "https://guyanatimesgy.com/wp-content/uploads/2016/12/e-commerce.png?w=640" },
                { "id": 3, "name": "Roberto Eletro", "img": "https://image.freepik.com/vetores-gratis/vetor-de-design-de-logotipo-de-loja-de-bicicletas_53876-40626.jpg" },
                { "id": 4, "name": "Magazine Raissa", "img": "https://bcassetcdn.com/asset/logo/6ae62678-7153-44c7-b35c-42821937e14b/logo?v=4&text=Logo+Text+Here" },
                { "id": 5, "name": "Quem disse, Beatrice?", "img": "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/614/cached.offlinehbpl.hbpl.co.uk/news/ORP/BT_logo-20190517083725299.jpeg" },
                { "id": 6, "name": "Casa & Vimos", "img": "https://www.marketinglancashire.com/app/uploads/2017/06/generic-logo.jpg" }
            ]
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        });
        this.setState({ isReady: true });
    }

    render() {

        if (!this.state.isReady) {
            return <AppLoading />
        }
        return (
            <Container style={styles.container}>
                <Content>
                    <FlatList data={this.state.lojas}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <LojaCard loja={item}/>
                        }
                    />
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 70,
        paddingTop: 20,
        alignSelf: 'flex-end'
    }
})