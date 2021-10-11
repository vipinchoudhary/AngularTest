import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ProfileService } from './profile-service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
describe('ProfileService', () => {
  let profileService: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ProfileService
      ],
    });

    profileService = TestBed.get(ProfileService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(profileService).toBeTruthy();
  });
});