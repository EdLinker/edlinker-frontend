export interface Task {
    taskId: number;
    auditoriumId?: number;
    author: {
        name: string;
        surname: string;
        id?: number;
    };
    avatar: string;
    createdAt: string;
    description: string;
    status?: string;
    subjectName: string;
    title: string;
    urls: {
        url: string;
    }[];
    // eslint-disable-next-line id-blacklist
    number: number;
}
