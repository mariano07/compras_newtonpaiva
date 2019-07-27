import React from 'react';
import { Container, Header, Left, Icon, Body, Title, Right, Content } from 'native-base';
import { Font, AppLoading } from 'expo';
import { FlatList, StyleSheet } from 'react-native';
import ProdutoCard from '../components/ProdutoCard'

export default class ComprasPendentes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            lojas: [
                { "id": 3, "produto": "Jóia do Tempo", "loja": "Roberto Eletro", "img": "http://pm1.narvii.com/6859/51539a2cf10cb99f4f5b74e3b216a9d86ad89b5dv2_00.jpg" },
                { "id": 4, "produto": "Jóia da Mente", "loja": "Ponto Quente", "img": "http://pm1.narvii.com/6859/572783bf5fa999dc695287f382cc27eb711c4230v2_00.jpg" },
                { "id": 5, "produto": "Jóia da Alma", "loja": "Quem disse, Beatrice?", "img": "https://www.mixfmpoa.com.br/wp-content/uploads/2018/04/3.jpg" },
                { "id": 6, "produto": "Jóia da Realidade", "loja": "Quem disse, Beatrice", "img": "http://pm1.narvii.com/6859/896a14388a94cc188203b9189438329aebd2a4a4v2_00.jpg" },
                { "id": 8, "produto": "Jóia do Ego", "loja": "Casa & Vimos", "img": "http://pm1.narvii.com/7203/36e74d9d7c145865132c4798871c8d7017e49567r1-715-715v2_00.jpg" }

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
                            <ProdutoCard produto={item}/>
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
    }
})