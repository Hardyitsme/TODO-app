import { ProgressTypes } from "../../../entities/todo/model";

export const TodoProgressTypeText = {
    [ProgressTypes.CLOSE]: 'Завершен',
    [ProgressTypes.IN_DEVELOPMENT]: 'В работе',
    [ProgressTypes.PAUSED]: 'Пауза',
}