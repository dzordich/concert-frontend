import * as SMS from 'expo-sms';
import { BETA_URL } from '../contants/stagebite';

const sendMessage = async messageContent => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        await SMS.sendSMSAsync([], messageContent);
    } else {
        console.warn('SMS service not available');
    }
};

export const shareShow = (performerName, venueName, date) =>
    sendMessage(
        `Let's see ${performerName} at ${venueName} on ${date}. Join the Stagebite beta: ${BETA_URL}`
    );
