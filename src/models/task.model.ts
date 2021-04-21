export interface Task {
    auditoriumId: number;
    author: {
        firstName: string;
        lastName: string;
        userId: number;
    };
    avatar: string;
    createdAt: string;
    description: string;
    status: string;
    subjectName: string;
    title: string;
    urls: {
        url: string;
    }[];
}
