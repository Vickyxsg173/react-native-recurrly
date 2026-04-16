import { Text, View } from "react-native";
import {Link, useLocalSearchParams} from "expo-router";

export default function SubscriptionDetails() {
    const {id} = useLocalSearchParams<{ id : string} >();
    return (
        <View>
            <Text>SubscriptionDetails: {id}</Text>
            <Link href="/">Go Back</Link>
        </View>
    );
}