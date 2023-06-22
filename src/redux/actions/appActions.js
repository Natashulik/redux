export const PRESS_BUTTON_TASK_TYPE = 'PRESS_BUTTON_TASK_TYPE';
export const SELECT_SORT_TYPE = 'SELECT_SORT_TYPE';

export const pressButton = (selectedButton) => ({  // меняет selectedButton в зависимости от нажатой кнопки с типом задач
    type: PRESS_BUTTON_TASK_TYPE,
    payload: selectedButton
})

export const setSelectSort = (sortType) => ({  //меняет выбор типа сортировки
    type: SELECT_SORT_TYPE,
    payload: sortType
})

