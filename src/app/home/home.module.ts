import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BeveragesComponent } from '../component/beverages/beverages.component';
import { VegetablesComponent } from '../component/vegetables/vegetables.component';
import { FruitsComponent } from '../component/fruits/fruits.component';
import { GroceriesComponent } from '../component/groceries/groceries.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
    HomePageRoutingModule
  ],
  declarations: [HomePage, VegetablesComponent,
    BeveragesComponent,
    FruitsComponent,
    GroceriesComponent,]
})
export class HomePageModule {}
