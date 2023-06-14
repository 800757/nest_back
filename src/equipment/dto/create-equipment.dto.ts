import { EquipmentType } from 'src/equipment/entities/equipment.entity';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';

export class CreateEquipmentDto {
    id: number;
    role: EquipmentType;
    password: string;
    employee: EmployeeEntity;
}
