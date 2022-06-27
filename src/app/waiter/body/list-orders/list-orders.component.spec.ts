<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, EMPTY, of } from 'rxjs';
import OrderFirebase from 'src/app/interfaces/orders-firebase';
import { FirebaseService } from 'src/app/services/firebase.service';

import { ListOrdersComponent } from './list-orders.component';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;
  let firebaseService: FirebaseService;
  const firebaseServiceStub = {
    updateOrder(order: OrderFirebase, status: string){
      order.Status = status;
      return order.Status
    },
    getOrdens(): Observable<any[]>{
      return of([{
        "Products": [
            {
                "cheese": 0,
                "url": "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BurguerConQueso_500_540_0.png",
                "name": "Beef burger",
                "count": 1,
                "type": "simple",
                "egg": 0,
                "price": 10
            },
            {
                "type": "simple",
                "count": 1,
                "cheese": 0,
                "url": "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BurguerConQueso_500_540_0.png",
                "name": "Beef burger",
                "price": 10,
                "egg": 0
            }
        ],
        "Client": "Mario",
        "Date": "Wed Jun 22 2022 00:15:03 GMT-0500 ",
        "Total": 20,
        "Status": "Ready",
        "Waiter": "Juan",
        "Table": "55",
        "id": "dIZLtJT2EU2Ks2bfceck"
    }])
    }
  };
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ ListOrdersComponent ],
      providers: [{ provide: FirebaseService, useValue: firebaseServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    firebaseService = TestBed.inject(FirebaseService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('List orders', () => {
    spyOn(firebaseService,'getOrdens').and.callThrough()
    expect(component.orders.length).toEqual(1);
  });
  it('Update status of the orders', ()=>{

  const statusChange = 'Served';
    spyOn(firebaseService, 'updateOrder').and.callThrough();
    component.changeStatus(0,'Served')
      expect(component.orders[0].Status).toBe(statusChange);
  })
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, EMPTY, of } from 'rxjs';
import OrderFirebase from 'src/app/interfaces/orders-firebase';
import { FirebaseService } from 'src/app/services/firebase.service';

import { ListOrdersComponent } from './list-orders.component';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;
  let firebaseService: FirebaseService;
  const firebaseServiceStub = {
    updateStatusOrder(order: OrderFirebase, status: string){
      order.Status = status;
      return order.Status
    },
    getOrders(): Observable<any[]>{
      return of([{
        "Products": [
            {
                "cheese": 0,
                "url": "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BurguerConQueso_500_540_0.png",
                "name": "Beef burger",
                "count": 1,
                "type": "simple",
                "egg": 0,
                "price": 10
            },
            {
                "type": "simple",
                "count": 1,
                "cheese": 0,
                "url": "http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.pe/files/BurguerConQueso_500_540_0.png",
                "name": "Beef burger",
                "price": 10,
                "egg": 0
            }
        ],
        "Client": "Mario",
        "Date": "Wed Jun 22 2022 00:15:03 GMT-0500 ",
        "Total": 20,
        "Status": "Ready",
        "Waiter": "Juan",
        "Table": "55",
        "id": "dIZLtJT2EU2Ks2bfceck"
    }])
    }
  };
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ ListOrdersComponent ],
      providers: [{ provide: FirebaseService, useValue: firebaseServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    firebaseService = TestBed.inject(FirebaseService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('List orders', () => {
    spyOn(firebaseService,'getOrders').and.callThrough()
    expect(component.orders.length).toEqual(1);
  });
  it('Update status of the orders', ()=>{

  const statusChange = 'Served';
    spyOn(firebaseService, 'updateStatusOrder').and.callThrough();
    component.changeStatus(0,'Served')
      expect(component.orders[0].Status).toBe(statusChange);
  })
});
>>>>>>> e3de697ba36d0b218784c128c88145646ab03db9
