Ext.onReady(function () {
    Ext.ns("hi");
    hi.tabpanel = Ext.extend(Ext.TabPanel,
        {
            activeTab: 0,
            items: [{
                title: '国内版',
                html: 'A simple tab'
            },
            {
                title: '国际版',
                html: 'Another one'
            }],
            items:[
                {xtype: 'hi.SeachButton'}
            ]
        });
    Ext.reg('hi.tabpanel',hi.tabpanel);
});