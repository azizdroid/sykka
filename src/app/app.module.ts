import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { MakeupService } from './makeup.service';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
  
    CategoriesComponent,
  
    BrandsComponent,
  
    TagsComponent
  ],
  exports: [RouterModule],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    
    RouterModule.forRoot([{
      path:'home',component:HomeComponent
    },
    
    {
      path:'categories',component:CategoriesComponent
    },
    {
      path:'brands',component:BrandsComponent
    },
    {
      path:'tags',component:TagsComponent
    },
 
  
  {path:'',redirectTo:'home',pathMatch:'full'}])
  ],
  providers: [MakeupService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
