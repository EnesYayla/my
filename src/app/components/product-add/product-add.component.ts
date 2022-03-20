import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.createproductAddForm();
    this.add();
  }

  createproductAddForm() {
    this.productAddForm = this.formBuilder.group({
      //Ürün eklerken kaydının tutulmasını istediğimiz özellikleri buraya ekleyeceğiz
      title: ['', Validators.required],
      id: ['', Validators.required],
      userId: ['', Validators.required],

      //map edilecek bölümler ve kurallar burada belirleniyor
    });
  }

  add() {
    //Üstteki fonksiyon ile gelen özellikleri bir product objesi haline getirip ürünü ekle
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        (response) => {
          console.log(response);
          console.log('Ürün eklendi!');
        },
        (responseError) => {
          if (responseError.Errors.length > 0) {
            console.log(responseError.error.Errors);
            
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              // console.log(responseError.error.Errors[1]).ErrorMessage);
              console.log("Doğrulama Hatası");
            }
          }
        }
      );
    } else {
      console.log('Ürün eklenemedi!');
    }
  }
}
