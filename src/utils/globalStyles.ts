import EStyleSheet from 'react-native-extended-stylesheet'
import { width } from 'utils/globalConstants'
EStyleSheet.build({
    $textColor: '#484848',
    $backgroundColor: 'red',
    $fontSize: 14,
})
export const globalStyles = EStyleSheet.create({
    text: {
        color: '$textColor',
        fontSize: '$fontSize',
    },
    container: {
        flex: 1,
        width: width(100),
        backgroundColor: '$backgroundColor',
    },
})
