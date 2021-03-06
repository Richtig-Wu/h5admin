# node能做什么
* 开发逻辑复杂的网站
* 单元测试工具
* 命令行工具
* 交互式的终端程序
* 带图形用户界面的本地应用程序
* Web Socket服务器
* TUP/UDP应用
* 基于社交网站的大规模web应用
* 客户端javascript编译器

# node的优点
* javascript的匿名函数和闭包特性非常适合事件驱动，采用事件驱动、异步编程，为网络服务而设计
* node.js在非阻塞模式的IO处理给Node.js到来相对低系统资源耗用下的高性能与负载平衡
* Node.js轻量高效，可以认为使数据密集型分布式部署环境下的实时应用系统的完美解决方案

# 缺点解决方案
## 适合I/O密集型应用，但不适合CPU密集型应用  
* 分解大型晕眩任务为多个小任务，使得运算能够适时释放，不阻塞I/O调用的发起
## 只支持单核，不能充分利用多核系统
* Nnigx反向代理，负载平衡，开多个进程，每个进程绑定不同端口
## 可靠性低，一旦代码崩溃整个系统都崩溃
* 开多个进程监听同一个端口，使用cluster模块

# 阻塞和非阻塞
* 阻塞：在调用之后一定要等到系统内核层面完成所有事件操作后，调用才结束
* 非阻塞：解决阻塞I/O造成CPU等待所浪费的事件，提高性能，在调用之后会立即返回

# 轮循
* 
