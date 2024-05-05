import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('usuario-permissao')
export class UsuarioPermissao {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_usuario_permissao' })
  id: number;

  @Column({ nullable: false })
  id_usuario: number;

  @Column({ nullable: false })
  module: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  @JoinColumn({
    name: 'idUsuario',
    foreignKeyConstraintName: 'fk_permissao_usuario',
  })
  usuario: Usuario;
}
