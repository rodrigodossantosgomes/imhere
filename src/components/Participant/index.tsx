import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"

type Props ={
    name: string;
    timestamp: string;
    onRemove: ()=> void;
}

export function Participant({name,timestamp, onRemove}:Props){

    return(
        <View style={styles.container}>
            <View style={styles.blockName}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.date}>
                    {timestamp}
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}