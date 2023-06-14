import { EquipmentEntity } from 'src/equipment/entities/equipment.entity';

export class CreateEmployeeDto {
    id: number;
    name: string;
    email: string;
    committee: string;
    equipment: Array<EquipmentEntity>;
}
