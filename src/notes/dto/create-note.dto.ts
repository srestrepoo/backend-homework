import { ApiModelProperty } from '@nestjs/swagger';
export class CreateNoteDto {
    @ApiModelProperty()
    readonly text: string;
    
    @ApiModelProperty()
    readonly username: string;
    
    @ApiModelProperty()
    createdDate: Date;
    
    @ApiModelProperty()
    updatedDate: Date;
  }