'use strict'
var { NativeModules } = require('react-native')

const LaunchArguments = {
    getLaunchArgs: () => {
        return NativeModules.RNAppLaunchArguments.launchArguments.split("::");
    }
}

module.exports = LaunchArguments;