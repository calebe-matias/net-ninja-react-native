import { View, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';


const ThemedView = ({ children, style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;
    
    return (
        <View 
            style={[{ backgroundColor: theme.background, flex: 1 }, style]}
            {...props}
        >
            {children}
        </View>
    );
}

export default ThemedView;