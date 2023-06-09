import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { Router } from '@angular/router';
import { EmployeeService } from '@task2023/common-all';
import { of } from 'rxjs';

class mockEmployeeService{
login(){
  return of({})
}
}
class mockRouter{
navigate(){
  return of({});
}
}
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers:[{provide:EmployeeService,useClass:mockEmployeeService},
      {provide:Router,useClass:mockRouter}]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should run submit function',()=>{
    component.submit(1);
    expect(component.submit).toBeDefined();
  })
});
