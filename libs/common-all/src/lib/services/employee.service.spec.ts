import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { UserService } from './user.service';
import { of } from 'rxjs';
class mockUserService{
getLink(){
  return of({});
}
postLink(){
  return of({})
}
}
describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:UserService,useClass:mockUserService}]
    });
    service = TestBed.inject(EmployeeService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

   test('should run getMethod',()=>{
    service.getMethod('/url');
    expect(service.getMethod).toBeDefined();
  });

  test('should run login',()=>{
    service.login('/url');
    expect(service.login).toBeDefined();
  });
test('should run postLink',()=>{
    service.postMethod('/url','data');
    expect(service.postMethod).toBeDefined();
  });

});
