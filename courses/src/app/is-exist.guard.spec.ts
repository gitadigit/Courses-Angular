import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isExistGuard } from './is-exist.guard';

describe('isExistGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isExistGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
