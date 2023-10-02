function getTimeToCompleteGuessInMilliseconds(checklistItems: string[]) {
    const checklistItemsLength = checklistItems.length;
    const timeToCompleteGuessInMilliseconds = checklistItemsLength * 20000;
    return timeToCompleteGuessInMilliseconds;
}

export { getTimeToCompleteGuessInMilliseconds };