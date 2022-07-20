import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/Auth/auth.jwt.guard';

import { JwtStrategy } from 'src/Auth/auth.jwt.strategy';
import { Roles } from 'src/Guard/role.decorotor';
import { Role } from 'src/Guard/role.enums';
import { RolesGuard } from 'src/Guard/role.guard';
import { ProduceService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProduceService) {}

  @Get()
  getProduct() {
    return this.productService.getAllProduct();
  }

  @Roles(Role.user)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  postProduct(@Body() productData) {
    return this.productService.postProduct(productData);
  }

  @Get(':id')
  getSingleProduct(
    @Param() id
  ) {

    

    return this.productService.getSingleProduct(id);
  }

  @Put(':id')
  updateSingleProduct() {
    return this.productService.updateSingleProduct();
  }
}
