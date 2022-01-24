export default function({ $axios, store, app, redirect, error, $auth}) {
  $axios.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
      $auth.logout()
      return redirect('/login')
    }
    return error;
  });
}
