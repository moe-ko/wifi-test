import { View, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

const NetInformation = () =>
{
    
    const netInfo = NetInfo.useNetInfo();
    console.log(netInfo);

    return (
    <View style={{margin: 20}}>

    //     <Text>type : {netInfo.type}</Text>
    //     <Text>isconnected : {netInfo.isConnected?.tostring()}</Text>
    //     <Text>ipaddress : {netInfo.details?.ipAddress}</Text>
    //     <Text>frequency : {netInfo.details?.frequency}</Text>
    //     <Text>strength : {netInfo.details?.strength}</Text>
    </View>
    
    );
};

export default NetInformation;