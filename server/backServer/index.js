let Router = require('express').Router;
//引入接口
let interface = require('./controller/interface'); 
//实例化路由
let router  = Router();
//将接口应用到express路由里
router.use(interface); 


// export default router;
module.exports = router;