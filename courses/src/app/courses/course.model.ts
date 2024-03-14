export class Course {
    id!: number;
    name!: string;
    categoryId!: number;
    amountLesson!: number;
    StartDate!: Date;
    syllabus!: string[];
    wayLearning!: WayLearning;
    lectuerId!: number;
    image!: string;
}
export enum WayLearning {
    Frontal = 1,
    Digital = 2
}