import { Text, View } from "react-native";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
    return (
        <SafeAreaView className="bg-background flex-1 p-5">
            <Text>Insights</Text>
        </SafeAreaView>
    );
}