export interface User {
    id: number;
    firstName: string;
    lastName: string;
    patronymic: string;
    phoneNumber: string;
    roles: [
        {
            id: number;
            name: string;
        }
    ];
}
