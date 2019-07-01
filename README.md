# MyReactNativeApp
This is a React-Native Project!

#首先需要配置的是导航 

所以首选需要安装 
    1 react-navigation
        yarn add react-navigation 或者 npm install --save react-navigation
    2 react-native-gesture-handler
        yarn add react-native-gesture-handler 或者 npm install --save react-native-gesture-handler
    3 link所有原生依赖
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