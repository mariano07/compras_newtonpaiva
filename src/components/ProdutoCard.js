import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProdutoCard(props) {
    return (
        <TouchableOpacity style={styles.item}>
            <Image source={{ uri: props.produto.img }} resizeMode="contain" style={styles.thumbnail} />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                <Text style={styles.itemTitle}>{props.produto.produto}</Text>
                <Text style={styles.itemDescription}>Loja: {props.produto.loja}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomColor: '#c0c0c0',
        borderBottomWidth: 1,
        margin: 5
    },
    thumbnail: {
        width: 64,
        height: 64,
        margin: 5,
        borderRadius: 15
    },
    itemTitle: {
        marginLeft: 10,
        fontSize: 16
    },
    itemDescription: {
        marginLeft: 10,
        fontSize: 10,
        color: '#f30'
    }
})