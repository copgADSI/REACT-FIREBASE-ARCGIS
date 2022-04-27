import { useState } from 'react'

export const useCustomizedSnackbars = () => {
  const [alert,setAlert] = useState({
    open:false,
    message:null,
    severity:null,
  })
  const handleClick = () => {
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({...alert, open: false})
  };
  return {
    handleClick,
    handleClose,
    setAlert,
    alert
  }
}

export default useCustomizedSnackbars