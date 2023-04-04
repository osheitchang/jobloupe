import {View, Text} from 'react-native';
import {Link, Stack} from 'expo-router';

export default function Home(){
    return(
        <View style={{flex:1, justyContent: "center", alignItems: "center"}}>
            <Stack.Screen options={{ title: "Overview" }} />
            <Link href="/details">Go to details</Link>
            <Text>Home</Text>
        </View>
    )
}