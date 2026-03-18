export interface Lesson {
    id: number;
    title: string;
    duration: string;
    order: number;
    themeId: number;
    subjectId: number;
    levelId: number;
    videoUrl: string;
    summary: string;
    hasVideo: boolean;
    hasNotes: boolean;
    hasDiscussion: boolean;
}

export interface LessonContent {
    id: number;
    lessonId: number;
    htmlContent: string;
    createdAt: string;
    updatedAt: string;
}
