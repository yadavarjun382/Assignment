import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../../product-details';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productType:any;
  productDetailsList:any;
  bgcolor:any;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.productType = this.route.snapshot.paramMap.get('id');
    if(this.productType == 'vegetable'){
      this.bgcolor = "green";
      this.productDetailsList= <ProductDetails> [
        {title:"Cauliflower",
        price:200,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/cauliflower/cauliflower_PNG12686.png"
      },
        {title:"Broccoli",
        price:100,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/broccoli/broccoli_PNG72975.png"
      },
        {title:"Cucumber",
        price:50,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/cucumber/cucumber_PNG84330.png"
      },
      ];
    }else if(this.productType == 'groceries'){
      this.bgcolor = "turquoise";
      this.productDetailsList= <ProductDetails> [
        {title:"Milk",
        price:80,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/milk/milk_PNG12762.png"
      },
        {title:"Pasta",
        price:50,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/pasta/pasta_PNG99.png"
      },
        {title:"Garlic",
        price:120,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/garlic/garlic_PNG12805.png"
      },
      ];
    }else if(this.productType == 'fruits'){
      this.bgcolor = "yellow";
      this.productDetailsList= <ProductDetails> [
        {title:"Banana",
        price:50,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/banana/banana_PNG849.png"
      },
        {title:"Blueberries",
        price:150,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/blueberries/blueberries_PNG72.png"
      },
        {title:"Pineapple",
        price:130,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/pineapple/pineapple_PNG2758.png"
      },
      ];
    }else if(this.productType == 'beverages'){
      this.bgcolor = "turquoise";
      this.productDetailsList= <ProductDetails> [
        {title:"Juice",
        price:50,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/juice/juice_PNG7193.png"
      },
        {title:"Wine",
        price:350,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/france/france_PNG8.png"
      },
        {title:"Water",
        price:40,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur, voluptas illo soluta debitis nostrum odio in tempore facere fugiat, quis labore cum illum sunt incidunt tempora nesciunt, blanditiis alias!",
        image:"http://pngimg.com/uploads/water/water_PNG50246.png"
      },
      ];
    }
    
  }

}
