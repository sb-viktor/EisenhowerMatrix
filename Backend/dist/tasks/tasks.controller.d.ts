import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): ({
        id: number;
        title: string;
        quadrant: string;
    } | {
        title: string;
        quadrant: string;
        id?: undefined;
    })[];
    create(body: {
        title: string;
        quadrant: string;
    }): {
        id: number;
        title: string;
        quadrant: string;
    };
}
