import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

function PostCard() {
    return (
        <View style={styles.postCard}>
            <View style={styles.topBar}>
                <View style={styles.flex}>
                    <View style={styles.avatar}></View>
                    <View style={styles.space20}></View>
                    <Text style={styles.text}>lang.ford_</Text>
                </View>

                <View style={styles.flex}>
                    <TouchableOpacity><Text style={[styles.btn, styles.btnText]}>following</Text></TouchableOpacity>
                    <View style={styles.space20}></View>
                    <TouchableOpacity><Icon name="more-horizontal" size={20} color="#000" /></TouchableOpacity>
                </View>
            </View>

            <View style={styles.postImg}></View>

            <View style={[styles.flex, styles.postActionIcons]}>
                <View style={styles.flex}>
                    <TouchableOpacity><Icon name="heart" size={26} color="#000" /></TouchableOpacity>
                    <View style={styles.space13}></View>
                    <TouchableOpacity><Icon name="message-circle" size={26} color="#000" /></TouchableOpacity>
                    <View style={styles.space13}></View>
                    <TouchableOpacity><Icon name="send" size={26} color="#000" /></TouchableOpacity>
                </View>

                <TouchableOpacity><Icon name="bookmark" size={26} color="#000" /></TouchableOpacity>
            </View>

            <Text style={[styles.text, styles.caption]}>1200 likes</Text>
            <Text style={[styles.text, styles.caption]}>lorem ipsum go to hell i hate my life damnitlorem ipsum go to hell i hate my life damnitlorem ipsum go to hell i hate my life damnit</Text>
            <Text style={[styles.text, styles.caption]}>Liked by _tesla</Text>
            <TouchableOpacity><Text style={[styles.text, styles.caption, styles.greyText]}>view all 7 comments</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },

    postActionIcons: {
        padding: 15,
        justifyContent: 'space-between'
    },

    postCard: {
        marginBottom: 0
    },

    greyText: {
        color: '#bbb',
    },

    text: {
        color: '#000'
    },

    caption: {
        padding: 15,
        paddingTop: 0,
        marginTop: -10,
        lineHeight: 23
    },

    btn: {
        backgroundColor: '#006ee6',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 3
    },

    btnText: {
        color: '#fff'
    },

    postImg: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        height: 300,
    },

    space20: {
        width: 20,
        height: 20
    },

    space13: {
        width: 13,
        height: 13
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatar: {
        width: 40,
        height: 40,
        backgroundColor: '#f1f1f1',
        borderRadius: 100
    },
})

export default PostCard