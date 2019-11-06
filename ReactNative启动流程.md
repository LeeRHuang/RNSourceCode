#### ReactNative启动流程

启动流程加载时候会调用`CxxBridge`的`start`方法，在这个方法里做了几件事情，第一，会开启一个线程给`JS`使用，设置线程优先级为最高的交互级别，该线程会启动一个`runRunLoop`方法监听；第二，加载封装的原生模块，例如`SwitchManager`,`AlertManager`等组件模块 (调用对应的方法为`_initializeModules --> RCTGetModuleClasses -->_registerModulesForClasses)`;其中`RCTGetModuleClasses`方法调用的是`RCTBridge`类中中的方法，返回一个`RCTModuleClasses`拷贝的数组，这个数组就是所有实现`RCTBridgeModule`协议的对象，在该协议中会自动实现`RCTRegisterModule`方法，将实现类加入到`RCTModuleClasses`数组中去





