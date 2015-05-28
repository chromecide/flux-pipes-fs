//load the actions

var fluxPipesHTTP = {
    actions:{
        folders: {
            create: require(__dirname+'/actions/folders/Create.js'),
            remove: require(__dirname+'/actions/folders/Remove.js'),
            rename: require(__dirname+'/actions/folders/Rename.js')
        }
    },
    pipes:{
        
    },
    init: function(fPipes){
        fPipes.actions.register('FluxPipesFS:Folders:Create', this.actions.folders.create);
        fPipes.actions.register('FluxPipesFS:Folders:Remove', this.actions.folders.remove);
        fPipes.actions.register('FluxPipesFS:Folders:Rename', this.actions.folders.rename);

        // var sendJavascriptPipe = new fPipes.pipe();
        // sendJavascriptPipe.use('HTTP:Response:SetContentType:Javascript');
        // sendJavascriptPipe.use('HTTP:Response:SendHeaders');
        // sendJavascriptPipe.use('HTTP:Response:SendCTXHTTPResponse:Text');
        // sendJavascriptPipe.use('HTTP:Response:End');
        
        // fPipes.pipes.register('HTTP:SendResponse:Javascript', sendJavascriptPipe);
    }
};

module.exports = fluxPipesHTTP;