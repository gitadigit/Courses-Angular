import { CanActivateFn } from '@angular/router';
import Swal from 'sweetalert2';

export const isExistGuard: CanActivateFn = (route, state) => {
  
  const isRegistered = sessionStorage.getItem("user")
  const isLecture=sessionStorage.getItem("lector")
  if (!isRegistered&&!isLecture) {
    Swal.fire({
      icon: "warning",
      title: "Warning",
      text: "You are not registered!",
    });
    return false;
  }
  return true;
};
