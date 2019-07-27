import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LojaCard(props) {
    return (
        <TouchableOpacity style={styles.item}>
            <Image source={{ uri: props.loja.img }} resizeMode="contain" style={styles.thumbnail} />
            <Text style={styles.itemTitle}>{props.loja.name}</Text>
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
        margin: 5
    },
    itemTitle: {
        alignSelf: 'center',
        marginLeft: 10
    }
})