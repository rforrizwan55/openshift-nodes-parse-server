module.exports = {
    server: {
        enableAnonymousUsers: false,
        serverURL:'https://jntuh-schools9.rhcloud.com/parse',
        publicServerURL:'https://jntuh-schools9.rhcloud.com/parse'
    },
    dashboard: {
        "apps": [
            { appId: 'com.rizwan.jntuh',
                serverURL: 'https://jntuh-schools9.rhcloud.com/parse',
                masterKey: 'superman2',
                appName: 'Parse Server'
            }
            ]
    }
}