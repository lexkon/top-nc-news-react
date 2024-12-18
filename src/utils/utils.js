export const formatDate = (inputDate) => {

}

export const toTitleCase = (titleString) => {
    const smallWords = ['a', 'an', 'and', 'but', 'for', 'nor', 'or', 'so', 'the', 'to', 'up', 'yet', 'is', 'in', 'on', 'of', 'at', 'by', 'as']

    return titleString
        .split(' ')
        .map((word, index) => {
            if (index === 0 || index === titleString.split(' ').length - 1 || !smallWords.includes(word.toLowerCase())) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            }
            return word.toLowerCase()
        })
        .join(' ')
}