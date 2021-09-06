const mtRouter = [{
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@views/Home.vue')
}]
export default mtRouter