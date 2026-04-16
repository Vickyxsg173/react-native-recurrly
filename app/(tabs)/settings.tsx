import { Text} from "react-native";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function Settings() {
    return (
        <SafeAreaView className="bg-background flex-1 p-5">
            <Text>Settings</Text>
        </SafeAreaView>
    );
}