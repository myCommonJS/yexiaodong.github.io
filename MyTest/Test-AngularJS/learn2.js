/**
 * Created by seaton on 2016/11/2.
 */
/*
第一个参数：定义myApp
第二个参数：表示注入的变量，“[]”（空数组）表示没有注入
 */
angular.module('myApp',[])
    .controller('mainController',function ($scope) {
        $scope.submitForm =function () {
            console.log("表单提交");
        }
    })
    .controller('SignUpController',function ($scope) {
        //表单对象
        $scope.userdata ={};
        
        //表单提交执行的动作
        $scope.submitForm =function () {
            console.log("表单提交：" + $scope.userdata);
            console.log($scope.userdata);
        }
    })

    .directive('compare',function () {
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText:'=compare'
        }
        o.require = 'ngModel';
        o.link = function (sco,ele,att,con) {
            con.$validators.compare = function (v) {
                return v == sco.orgText;
            }

            sco.$watch('orgText',function () {
                con.$validate();
            })
        }
        return o;
    })