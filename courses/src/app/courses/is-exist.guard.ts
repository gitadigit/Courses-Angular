import { CanActivateFn } from '@angular/router';

export const isExistGuard: CanActivateFn = (route, state) => {
  
  const isRegistered = sessionStorage.getItem("user")
  const isLecture=sessionStorage.getItem("lector")
  if (!isRegistered&&!isLecture) {
    return false;
  }
  return true;
}
