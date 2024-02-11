import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  let path1 = { path: 'test', redirectTo: 'tt', data: { isVisibleInNavigation: true } };
  let path2 = { path: 'test2', redirectTo: 'tt', data: { isVisibleInNavigation: false } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([path1, path2])],
      providers: [NavigationService]
    });
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return navigation data', () => {
    const navigationData = service.getNavigationData();
    expect(navigationData).toBeDefined();
    expect(navigationData.length).toBeGreaterThan(0);
  });

  it('should return test path', () => {
    const navigationData = service.getNavigationData();
    expect(navigationData).toBeDefined();
    expect(navigationData.length).toEqual(1);
    expect(navigationData[0].path).toEqual('test');
  });

  it('should not return test2 path', () => {
    const navigationData = service.getNavigationData();
    expect(navigationData).toBeDefined();
    expect(navigationData.length).toEqual(1);
    expect(navigationData[0].path).not.toEqual('test2');
  });
});
