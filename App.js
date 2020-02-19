import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
    state = {
        isLoading: true
    };
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude }
            } = await Location.getCurrentPositionAsync();
            //send to api and get weather

            this.setState({ isLoading: false });

            console.log(coords.latitude, coords.longitude);
        } catch (error) {
            Alert.alert("Cant find you");
        }
    };
    componentDidMount() {
        this.getLocation();
    }
    render() {
        const { isLoading } = this.state;
        return isLoading ? <Loading /> : null;
    }
}
