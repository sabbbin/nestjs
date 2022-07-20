import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseArrayPipe, Post, Put, UseFilters, UseInterceptors } from "@nestjs/common";
// import { AllException } from "src/exception/exception.handling";
import { CatOwnerService, CatsService } from "./custom.services";
import { CatOwner } from "./dbSchema/ownerCatSchema";
import { CreateCatDto, CreateCatOwnerDto } from "./dto/create-cat.dto";
import { SerializedUser } from "./interfaces/cat.interface";

@Controller('cat')
export class CatController{
    constructor(private catservice: CatsService) {}

    @Post()
    async create(@Body() createCatDto:CreateCatDto){
       
        return this.catservice.create(createCatDto)
    }


    @Get()
   
   async getall() {
    return this.catservice.findAll()
   }

   @UseInterceptors(ClassSerializerInterceptor)
   @Get(':id')
//    @UseFilters(AllException)
   async getsingle(
    @Param('id') id :string
  ) {
   const singlecat= await this.catservice.getSingle(id)
   
   if(singlecat) {
       console.log('single cat ',singlecat )
       
    const abc=  new SerializedUser(singlecat.toJSON());
    console.log('abc', abc)
    return abc
}
  }
  

  @Delete("/delete/:id")
  async deletecat(
    @Param('id') id :string
  ){
    const data= await this.catservice.deleteCat(id)
     if (data){
        return 'successfully deleted'
     }  
     return 'Unsuccessfully deleted items'
}

@Put('/update/:id')
async updatecat(
    @Param('id') id:string,
    @Body() body:any
)
{
    const data= await this.catservice.updateCat(id, body)
    if (data){
        return 'updated  successfully '+ data
    }
    return 'updated unsuccessfully'+data
}





   @Post('all')
   async createBulk(@Body(new ParseArrayPipe({items:CreateCatDto}))
   createCatDto:CreateCatDto[]
   ){
   
    return this.catservice.creatBulk(createCatDto)
   }


}

@Controller('catowner')
export class OwnerController{
    constructor (private catOwnerService: CatOwnerService){}

    @Post() 
    async create(@Body() createCatOwnerDto: CreateCatOwnerDto){
        console.log('helo ')
        return this.catOwnerService.create(createCatOwnerDto)
    }
    
}