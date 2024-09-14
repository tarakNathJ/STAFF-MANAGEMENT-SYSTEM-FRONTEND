
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Rout.jsx'

import { Provider } from 'react-redux'
import { store } from './Redux/store.jsx'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={Router}>
      <ToastContainer/>
    </RouterProvider>
  </Provider>

)
