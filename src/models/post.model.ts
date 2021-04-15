export interface Post {
    id: number;
    imageUrl: string;
    title: string;
    subjectName: string;
    author: string;
    value: string;
    date: string;
    mediaUrl: {
        url: string;
    }[];
}
