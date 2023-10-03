export default async function defineNuxtRouteMiddleware(to, from){

  if( process.server ) return

  if( process.client ){
    const auth = localStorage.getItem("auth")

    if( auth == null ){
        return
    }
 
  }
}