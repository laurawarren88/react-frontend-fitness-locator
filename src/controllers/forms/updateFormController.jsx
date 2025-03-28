import { showMessage } from '../../utils/messageAlert.jsx';

export const updateForm = async ({url, payload, alertContainerId}) => {
  try {
    console.log("Payload before stringify:", payload);
    const response = await fetch(url, {
        method: 'PUT',
        body: payload,
        credentials: 'include', 
    });

    if (response.ok) {
        const data = await response.json();
        return { success: true, data };
    } else {
        const errorData = await response.json();
        showMessage(alertContainerId, errorData.error || 'Request failed', 'error');
        return { success: false, error: errorData };
    }
} catch (error) {
    console.error('Error:', error);
    showMessage(alertContainerId, 'An error occurred during the request', 'error');
    return { success: false, error };
}
};