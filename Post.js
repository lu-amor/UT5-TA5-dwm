import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const Post = ({ post }) => {
    return (
        <View style={styles.container}>
            <Image source={post.url} style={styles.image} />
            <Text style={styles.caption}>{post.caption}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderWidth: 4,
        padding: 10,
        borderColor: "black",
        marginVertical: 10,
    },
    image: {
        width: 300,
        height: 500,
    },
    caption: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
    },
});

export default Post;