import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PostCard from '../components/PostCard'

export default function VideoScreen({ navigation }) {
    return <View style={styles.container}>
        <View style={styles.appBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="arrow-back" color='#fff' size={26} /></TouchableOpacity>
            <Text style={[styles.whiteText, styles.appBarText]}>Drew Gooden's videos (2)</Text>

            <View style={styles.flex}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="ios-share-social" color='#fff' size={26} /></TouchableOpacity>
            </View>
        </View>

        <ScrollView>
            <TextInput style={styles.inputBox} placeholder='Search videos' placeholderTextColor={'#ffffff66'} />

            <PostCard />
            <PostCard />
            <PostCard />
        </ScrollView>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },

    inputBox: {
        backgroundColor: '#242424',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 12,
        margin: 15,
        marginVertical: 10,
        // marginTop: 0,
        color: '#fff'
    },

    defaultMargin: {
        margin: 15,
        // paddingTop: 10,
    },

    whiteText: { color: '#fff' },

    greyText: { color: '#888' },

    appBar: {
        backgroundColor: '#000',
        // borderBottomColor: '#242424',
        // borderBottomWidth: 1,
        width: '100%',
        height: 60,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    appBarText: {
        fontSize: 19,
        fontWeight: 'bold'
    },

    space20: {
        width: 20,
        height: 20
    },

    space10: {
        width: 10,
        height: 10
    },

    space5: {
        width: 5,
        height: 5
    },

    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})