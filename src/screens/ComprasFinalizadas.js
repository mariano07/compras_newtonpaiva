import React from 'react';
import { Container, Header, Left, Icon, Body, Title, Right, Content } from 'native-base';
import { Font, AppLoading } from 'expo';
import { FlatList, StyleSheet } from 'react-native';
import ProdutoCard from '../components/ProdutoCard';

export default class ComprasFinalizadas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            lojas: [
                { "id": 1, "produto": "Manopla do Infinito", "loja": "Casas Bahiana", "img": "https://abrakadabra.vteximg.com.br/arquivos/ids/219336-1000-1000/88022_000_1.jpg?v=636645759656400000" },
                { "id": 2, "produto": "Jóia do Espaço", "loja": "Magazine Raissa", "img": "http://pm1.narvii.com/6859/ca3509312c4209e59c71883909f15560ac339a7av2_00.jpg" },
                { "id": 7, "produto": "Jóia do Poder", "loja": "Roberto Eletro", "img": "http://pm1.narvii.com/6916/60a0c2ed844c24c67d193a0821778564c751421ar1-460-460v2_00.jpg" },
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
                            <ProdutoCard produto={item} />
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