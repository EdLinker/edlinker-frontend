export interface NewTask {
    auditoriumId: number;
    title: string;
    content: string;
    mediaUrls: {
        url: string;
    }[];
}
