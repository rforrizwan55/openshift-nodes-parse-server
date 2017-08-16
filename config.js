module.exports = {
    server: {
        enableAnonymousUsers: false,
        serverURL:'https://jntuh-schools9.rhcloud.com/parse',
        publicServerURL:'https://jntuh-schools9.rhcloud.com/parse'
    },
    dashboard: {
        "apps": [
            { appId: 'com.rizwan.jntuh',
                serverURL: 'http://localhost:8080/parse',
                masterKey: 'superman2',
                appName: 'Parse Server'
            }
            ]
    }
}