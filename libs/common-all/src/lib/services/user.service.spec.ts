import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

class mockHttpClient{
  get(){
    return of({});
  }
  post(){
    return of({});
  }
}
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:HttpClient,useClass:mockHttpClient}]
    });
    service = TestBed.inject(UserService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should run getLink',()=>{
    service.getLink('/url');
    expect(service.getLink).toBeDefined();
  });

  test('should run postLink',()=>{
    service.postLink('/url','data');
    expect(service.postLink).toBeDefined();
  });
});
