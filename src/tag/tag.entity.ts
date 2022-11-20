import { PostEntity } from 'src/post/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';

@Entity('TAG')
export class TagEntity {
    @PrimaryGeneratedColumn() 
    id:number;

    @Column()
    tagName:string;
    
    @Column()
    tagDescription:string;

    @ManyToMany(() => PostEntity, (post) => post.tags, {onDelete: 'CASCADE'})
    @JoinTable({
        name: 'POST_TAG', joinColumn: {
            name: 'tagId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'postId',
            referencedColumnName: 'id'
        }
    })
    posts: PostEntity[]

}
