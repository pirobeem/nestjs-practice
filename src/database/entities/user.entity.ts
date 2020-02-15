import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn('bigint')
  id: number;

  @Column({ length: 255 })
  user_name: string;
}
