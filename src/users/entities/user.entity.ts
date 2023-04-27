import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn 
} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default:null})
    username: string;

    @Column({default:null})
    password: string;

    @Column({ default: null })
    profile_photo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
