export default function({ $axios, store, app, redirect, error, $auth }) {
  $axios.interceptors.response.use(response, error =>{
    if(error.response == 401){
      return redirect('/')
    }
  })
}

