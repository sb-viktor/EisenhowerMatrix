export declare class TasksService {
    private tasks;
    findAll(): ({
        id: number;
        title: string;
        quadrant: string;
    } | {
        title: string;
        quadrant: string;
        id?: undefined;
    })[];
    create(task: {
        title: string;
        quadrant: string;
    }): {
        id: number;
        title: string;
        quadrant: string;
    };
}
