import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.yellowView}>
                <Text>HELLO?</Text>
            </View>
            <View style={styles.blueView}>
                <Text>HELLO!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    yellowView: {
        flex: 2,
        backgroundColor: "yellow"
    },
    blueView: {
        flex: 20,
        backgroundColor: "blue"
    }
});
