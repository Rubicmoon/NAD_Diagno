import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  subcategorieslist:any;
  selected_cat:any;
  cat_id:any;
  categories:any;
  no_icon:any;
  no_message:any;

  homeActive:boolean=false;
  categoryActive:boolean=true;
  favouriteActive:boolean=false;
  ordersActive:boolean=false;
  notificationActive:boolean=false;
  user_id:any;
  notification_data:any;
  notification_count:any;
  constructor(private apiserv:ApiService,private actroute:ActivatedRoute,
    private loadingCtrl:LoadingController,private router:Router,public utilserv:UtilityService) { 
    this.cat_id=this.actroute.snapshot.paramMap.get('cat_id');
    this.user_id = localStorage.getItem('user_id');
    this.notification_count=localStorage.getItem("noti_count");
  }

  ngOnInit() {
    this.homecategoriesList();
  }

  ionViewWillEnter(){
    this.favouriteActive=false;
    this.homeActive=false;
    this.categoryActive=true;
    this.ordersActive=false;
    this.notificationActive=false;
  }
  getNotificationCount(){
    this.apiserv.getNotificationCount(this.user_id).subscribe(data => {
      var response = data['response'][0];
      console.log(response['count']);
      this.notification_count=response['count'];
    })
  }

  goOrdersTab(){
    this.homeActive=false;
    this.categoryActive=false;
    this.favouriteActive=false;
    this.ordersActive=true;
    this.notificationActive=false;
    if (this.user_id==''||this.user_id==null) {
      // this.utilserv.presentToast('Please Login',"danger");
      this.router.navigate(['login']);
      return;
      
    }else{
      this.router.navigate(['myorders']);
    }
  }

  goHomeTab(){
    this.homeActive=true;
    this.categoryActive=false;
    this.favouriteActive=false;
    this.ordersActive=false;
    this.notificationActive=false;
    this.router.navigate(['home']);
  }

  goNotificationTab(){
    this.homeActive=false;
    this.categoryActive=false;
    this.favouriteActive=false;
    this.ordersActive=false;
    this.notificationActive=true;
    this.router.navigate(['notification']);
  }
  
  goCategoryTab(){
    this.homeActive=false;
    this.categoryActive=true;
    this.favouriteActive=false;
    this.ordersActive=false;
    this.notificationActive=false;
    this.router.navigate(['category']);
  }
  goFavouriteTab(){
    this.homeActive=false;
    this.categoryActive=false;
    this.favouriteActive=true;
    this.ordersActive=false;
    this.notificationActive=false;
    if(this.user_id==''||this.user_id==null){
      // this.utilserv.presentToast('Please Login',"danger");
      this.router.navigate(['login']);
      return;
    }
    this.router.navigate(['wishlist']);
  }

  subcategory() {
    this.apiserv.subcategoriesList(this.cat_id).subscribe(data => {
      var response = data['response'][0];
      if(response['icon']){
        this.no_icon=response['icon'];
      }
      if(response['message']){
        this.no_message=response['message'];
      }
      this.subcategorieslist = response['sub_categories'];
      if(this.subcategorieslist==null){
        this.subcategorieslist=[];
      }
      // this.entry_id = this.categorieslist[0].entry_id;
      // if (this.sub_cat) {
      //   this.current_segment_id = this.sub_cat;
      // } else {
      //   this.current_segment_id = this.entry_id;
      // }
    })
  }

  async homecategoriesList() {
     let loading = await this.loadingCtrl.create({
      
      showBackdrop:false,
           
      cssClass:'sacustom-cls',     
             
      message:`
           
      <div class="custom-spinner-container">
             
      <img class="loading" width="40px" height="40px" 
      src="assets/images/cmoon.gif" />
           
      </div>`
         
      });
      loading.present();
    this.apiserv.getCategories().subscribe(data => {
      console.log(data);
      var response = data['response'][0];
      loading.dismiss();
      if(response['status']=="Valid"){
        this.categories = response['categories'];
        for(var i=0;i<this.categories.length;i++){
          if(this.cat_id==this.categories[i].id){
            this.selected_cat=this.categories[i];
          }
        }
        console.log(this.selected_cat);
      }
      else{
        this.categories=[];
      }
      this.subcategory();
    },err=>{
      loading.dismiss();
    })
  }

  gotoProductList(id,index) {
    console.log(index);
    this.router.navigate(['/productlist', { banner: this.selected_cat.image, id: this.selected_cat.id, title: this.selected_cat.category,sub_category:id,current_index:index }]);
  }

}
