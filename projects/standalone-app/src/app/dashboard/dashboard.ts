import { Component, input } from '@angular/core';
export interface Product {
  id?: string | null;
  name?: string;
  description?: string;
  price?: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
// example using input
export class Dashboard {
  // protected id = input<string>('');
  // protected someOtherParameter = input<string>('');
  // protected id = input<number, string>(0, { transform: numberAttribute });
}

// example using snapshot
// export class Dashboard {
//   protected product: Product = {};
//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.product.id = this.route.snapshot.paramMap.get('id');
//     console.log(this.product);
//   }
// }

//example using subscribe
// export class Dashboard {
//   protected product: Product = {};
//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.route.paramMap.subscribe((params: ParamMap) => {
//       this.product.id = params.get('id');
//     });
//   }
// }

// example using resource
// export class Dashboard {
//   private service = inject(ProductService);
//   protected id = input<string>('');
//   productResource = resource({
//     loader: () => this.service.getProduct(this.id()),
//   });
// }

// example using computed
// export class Dashboard {
//   private service = inject(ProductService);
//   protected id = input<string>('');
//   product = computed(() => {
//     this.service.getProduct(this.id());
//   });
// }

// example using a switch
// export class Dashboard {
//   private service = inject(ProductService);
//   protected id = input<string>('');

//   product = toSignal(toObservable(this.id).pipe(switchMap((id) => this.service.getProduct(id))));
// }

// example using an effect
// export class Dashboard {
//   private service = inject(ProductService);
//   protected id = input<string>('');
//   protected product = signal<Product | null>(null);
//   constructor() {
//     effect(() => {
//       const productId = this.id();
//       this.service.getProduct(productId).subscribe((product) => {
//         this.product.set(product);
//       });
//     });
//   }
// }
