# MyReactNativeApp
This is a React-Native Project!
# 项目的安装
    项目的安装不再多说，直接去官网查看步骤即可：ios启动 react-native run-ios ; 安卓启动 react-native run-android

# 首先需要配置的是导航

### 1 react-navigation
    yarn add react-navigation 或者 npm install --save react-navigation
### 2 react-native-gesture-handler
    yarn add react-native-gesture-handler 或者 npm install --save react-native-gesture-handler
### 3 link所有原生依赖
    react-native link react-native-gesture-handler

    到此为止，IOS开发不需要再做其他额外的操作，但是在android开发还需要在MainActivity.java以下配置：

        package com.reactnavigation.example;
        import com.facebook.react.ReactActivity;
        import com.facebook.react.ReactActivityDelegate;
        import com.facebook.react.ReactRootView;
        import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

        public class MainActivity extends ReactActivity {

        @Override
        protected String getMainComponentName() {
            return "Example";
        }

        @Override
        protected ReactActivityDelegate createReactActivityDelegate() {
            return new ReactActivityDelegate(this, getMainComponentName()) {
                @Override
                protected ReactRootView createRootView() {
                    return new RNGestureHandlerEnabledRootView(MainActivity.this);
                    }
                };
            }
        }
https://reactnavigation.org/docs/zh-Hans/getting-started.html
export default createAppContainer(createBottomTabNavigator(
# createStackNavigator，createBottomTabNavigator
搭建一个新的项目，首先要做的一定是路由的配置，所有关于react-navigation的配置，我目前用到了createStackNavigator，createBottomTabNavigator的简单结合，实现了createStackNavigato的头部导航，createBottomTabNavigator底部导航，以及二者相结合自路由Detail的底部导航隐藏
# Ant Design Mobile RN of React
    关于ui组件，我选择的是antd，使用的步骤也很简单
    1. npm install @ant-design/react-native --save 或者 yarn add @ant-design/react-native
    2. react-native link @ant-design/icons-react-native
    3. 在组件中直接引入 import { Button } from '@ant-design/react-native'
# MobX的使用
    曾经Redux才是React或者React-Native的最佳伴侣，但是在MobX出现之后，一切都改变了，所以这次玩转React-Native，状态管理机，我毅然决然的选择了MobX(https://cn.mobx.js.org/)
## MobX和Redux的区别