export interface NewTask {
    auditoriumId: number;
    title: string;
    content: string;
    urls?: {
        url: string;
    }[];
}
