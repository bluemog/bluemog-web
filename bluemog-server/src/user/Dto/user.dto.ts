import { IsString, Length } from 'class-validator';

export class UserCreateDto {
  @IsString()
  @Length(0, 30)
  name: string;

  @IsString()
  @Length(0, 30)
  email: string;

  @IsString()
  @Length(0, 40)
  password: string;
}
