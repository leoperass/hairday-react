export interface Time {
    id: number;
    label: string;
}

export const times = {
    morning: [
        {id: 1, label: "9:00"},
        {id: 2, label: "10:00"},
        {id: 3, label: "11:00"},
        {id: 4, label: "12:00"},
    ],
    afternoon: [
        {id: 5, label: "13:00"},
        {id: 6, label: "14:00"},
        {id: 7, label: "15:00"},
        {id: 8, label: "16:00"},
        {id: 9, label: "17:00"},
        {id: 10, label: "18:00"},
    ],
    night: [
        {id: 11, label: "19:00"},
        {id: 12, label: "20:00"},
        {id: 13, label: "21:00"},
    ],
}