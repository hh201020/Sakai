var fluid_1_5=fluid_1_5||{};!function($,fluid){"use strict";fluid.defaults("fluid.prefs.dataSource",{gradeNames:["fluid.littleComponent"],invokers:{get:"fluid.prefs.dataSource.get",set:"fluid.prefs.dataSource.set"}}),fluid.defaults("fluid.cookieStore",{gradeNames:["fluid.prefs.dataSource","autoInit"],cookie:{name:"fluid-ui-settings",path:"/",expires:""}}),fluid.demands("fluid.prefs.dataSource.get","fluid.cookieStore",{funcName:"fluid.cookieStore.get",args:"{that}.options.cookie.name"}),fluid.demands("fluid.prefs.dataSource.set","fluid.cookieStore",{funcName:"fluid.cookieStore.set",args:["{arguments}.0","{that}.options.cookie"]}),fluid.cookieStore.get=function(cookieName){var cookie=document.cookie;if(!(cookie.length<=0)){var cookiePrefix=cookieName+"=",startIndex=cookie.indexOf(cookiePrefix);if(!(0>startIndex)){startIndex+=cookiePrefix.length;var endIndex=cookie.indexOf(";",startIndex);startIndex>endIndex&&(endIndex=cookie.length);var retObj=JSON.parse(decodeURIComponent(cookie.substring(startIndex,endIndex)));return retObj}}},fluid.cookieStore.assembleCookie=function(cookieOptions){var cookieStr=cookieOptions.name+"="+cookieOptions.data;return cookieOptions.expires&&(cookieStr+="; expires="+cookieOptions.expires),cookieOptions.path&&(cookieStr+="; path="+cookieOptions.path),cookieStr},fluid.cookieStore.set=function(settings,cookieOptions){cookieOptions.data=encodeURIComponent(JSON.stringify(settings)),document.cookie=fluid.cookieStore.assembleCookie(cookieOptions)},fluid.defaults("fluid.tempStore",{gradeNames:["fluid.prefs.dataSource","fluid.modelComponent","autoInit"]}),fluid.demands("fluid.prefs.dataSource.get","fluid.tempStore",{funcName:"fluid.identity",args:"{that}.model"}),fluid.demands("fluid.prefs.dataSource.set","fluid.tempStore",{funcName:"fluid.tempStore.set",args:["{arguments}.0","{that}.applier"]}),fluid.tempStore.set=function(settings,applier){applier.requestChange("",settings)},fluid.defaults("fluid.globalSettingsStore",{gradeNames:["autoInit","fluid.littleComponent"],components:{settingsStore:{type:"fluid.prefs.store"}}}),fluid.globalSettingsStore.finalInit=function(that){fluid.staticEnvironment.settingsStore=that.settingsStore},fluid.demands("fluid.prefs.store",["fluid.globalSettingsStore"],{funcName:"fluid.cookieStore"})}(jQuery,fluid_1_5);