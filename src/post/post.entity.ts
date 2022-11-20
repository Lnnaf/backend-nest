import { TagEntity } from 'src/tag/tag.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';

@Entity('POST')
export class PostEntity {
    @PrimaryGeneratedColumn() 
    id:number;

    @Column({nullable: true,})
    thumbnailUrl: string;
    @Column()
    title: string;
    @Column()
    urlTitle : string;
    @Column()
    description : string;
    @ManyToOne(() => UserEntity, (user) => user.posts , {cascade: true, eager: true })
    author: UserEntity;
    @Column({nullable: true,})
    lastModifier: Date;
    @Column({nullable: true})
    createdDate: Date;
    @Column()
    content : string 

    @ManyToMany(() => TagEntity, (tag) => tag.posts,  {cascade: true, eager: true ,onDelete: 'CASCADE'})
    @JoinTable({
        name: 'POST_TAG', joinColumn: {
            name: 'postId',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'tagId',
            referencedColumnName: 'id'
        }
    })
    tags: TagEntity[]
}
