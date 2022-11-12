import { PostEntity } from 'src/post/post.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity('USER')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({nullable: false})
    username: string
    @Column()
	displayName: string
    @Column({nullable: true,})
	dateJoin: Date
    @Column({nullable: true,})
	email: string
    @Column({nullable: true,})
	phone: string
    @Column({nullable: true,})
	company:string
    @Column({nullable: true,})
	userAvatarUrl: string

    @OneToMany(() => PostEntity, (post) => post.author)
    posts: PostEntity[]
}
