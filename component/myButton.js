Ext.onReady(function () {
    Ext.ns("hi");
    hi.SeachButton = Ext.extend(Ext.Button,
        {
            text: 'Seach',
            initComponent:function(){
                hi.SeachButton.superclass.initComponent.call(this);
                this.on('click',this.onButtonClick,this);
            },
            onButtonClick:function(e){
                Ext.Msg.alert('Seach Button','This is customized seach button')
            }
        }
    );
    Ext.reg('hi.SeachButton',hi.SeachButton);

});