import AsyncStorage from '@react-native-community/async-storage';

export const keys = {
    uuid: 'uuid',
};

const setAsyncStorage = (key,item) =>{
    try {
        await AsyncStorage.setItem(key, item);
        
    } catch (error) {
        console.log(error);
        
    }
}
const getAsyncStorage = (key) =>{
    try {
        const value = await AsyncStorage.getItem(key);
        if(value){
            return value;
        } else {
            return null;
        }
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

const clearAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
        
    } catch (error) {
        console.log(error);
        
    }
};

export {setAsyncStorage, getAsyncStorage, clearAsyncStorage };