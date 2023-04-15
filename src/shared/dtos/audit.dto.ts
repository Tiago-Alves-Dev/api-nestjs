import { IsString } from 'class-validator';

export class AuditDto {
  @IsString()
  createdAt?: string;

  @IsString()
  createdBy?: string;

  @IsString()
  updatedAt?: string;

  @IsString()
  updatedBy?: string;

  @IsString()
  deletedAt?: string;

  @IsString()
  deletedBy?: string;
}
