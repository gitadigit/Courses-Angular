export class Course {
    id!: number;
    name!: string;
    description!:string;
    categoryId!: number;
    amountLesson!: number;
    startDate!: Date;
    syllabus!: string[];
    wayLearning!: WayLearning;
    lecturerId!: number;
    image!: string;
}
export enum WayLearning {
    Frontal = 1,
    Digital = 2
}