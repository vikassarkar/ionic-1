'use strict';

define([
  'app'
], function (app) {
  	app.constant('$ionicLoadingConfig', {
        template: "<div class='app-loader'><div class='app-ripple-gif'><div></div><div></div></div></span></div>"
    });
    
    app.constant('serviceUrl',{
        
        mockdata: {
            adv: 'http://pansingh02v:8585/api/Advertisement/getadd',
            home: {
                userDetails: "mockdata/home.json"
            },
            viewBill: {
                userData: "mockdata/viewBill.json"
            },
            billHistory: {
                userDetails: "mockdata/billHistoryDounut.json",
                allUserDetails: "mockdata/billHistoryBar.json"
            },
            account: {
                userDetails: "mockdata/home.json"
            }
        }
    })
});
