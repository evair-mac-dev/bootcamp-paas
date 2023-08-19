import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { Field, InputType, registerEnumType } from '@nestjs/graphql';

export enum TopicStatus {
  DONE = 'done',
  TO_DO = 'to-do',
  IN_PROGRESS = 'in-progress',
}

registerEnumType(TopicStatus, { name: 'TopicStatus' });

@InputType()
export class CreateTopicDto {
  @Field()
  @IsString()
  topicName: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  completedDate?: Date;

  @Field(() => TopicStatus)
  @IsEnum(TopicStatus)
  status: TopicStatus;
}

@InputType()
export class UpdateTopicDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  topicName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @Field(() => TopicStatus, { nullable: true })
  @IsOptional()
  @IsEnum(TopicStatus)
  status?: TopicStatus;
}
