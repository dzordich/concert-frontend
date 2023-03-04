import * as SMS from 'expo-sms';
import { WEB_URL } from '../contants/stagebite';

const sendMessage = async messageContent => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        await SMS.sendSMSAsync([], messageContent);
    } else {
        console.warn('SMS service not available');
    }
};

export const shareShow = id => sendMessage(`${WEB_URL}/shows/${id}`);
