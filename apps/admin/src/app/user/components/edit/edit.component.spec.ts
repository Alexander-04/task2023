import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { EmployeeService } from '@task2023/common-all';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class mockEmployeeService{
postMethod(){
  return of({})
}
}
class mockRouter{
navigate(){
  return of({});
}
}
class mockActivatedRoute{
params=new BehaviorSubject<any>({
  id:1,data:'edit'
})
}
describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      providers:[{provide:EmployeeService,useClass:mockEmployeeService},
      {provide:Router,useClass:mockRouter},
    {provide:ActivatedRoute,useClass:mockActivatedRoute}],imports:[ReactiveFormsModule,
               MatSelectModule,
               MatDividerModule,
               BrowserAnimationsModule,
               MatInputModule,
               MatIconModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should run removearray',()=>{
  component.removeArray(1);
  expect(component.removeArray).toBeDefined();
});

  test('should run back function',()=>{
    component.back();
    expect(component.back).toBeDefined();
  });
});
