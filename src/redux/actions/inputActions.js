export const INPUT_CHANGE_TEXT = 'INPUT_CHANGE_TEXT';
export const INPUT_IS_EMPTY = 'INPUT_IS_EMPTY';

export const setInputText = (text) => ({
    type: INPUT_CHANGE_TEXT,
    payload: text
})

export const setIsEmpty = (isEmpty) => ({
    type: INPUT_IS_EMPTY,
    payload: isEmpty
})