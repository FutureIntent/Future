
export const getActionKey = (message: string): string => {
    let actionKey = message;
    actionKey = actionKey.replace(/\//, '');
    actionKey = actionKey.replace(/\s+.*/, '');

    return actionKey;
}

export const getActionText = (message: string): string => {
    let actionText = message;
    actionText = actionText.replace(/\/[a-z|0-9]*\s*/, '');

    return actionText;
}