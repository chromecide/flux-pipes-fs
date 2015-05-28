var fs = require("fs");

function createFolder(ctx, cbs){
    try{
        var path = null;
        if(this.cfg.source){
            path = ctx.getObjectValueByString(this.cfg.source);
        }else{
            if(this.cfg.path){
                path = this.cfg.path;
            }
        }

        if(path){
            if(!fs.pathExistsSync(path)){
                fs.mkdirSync(path);
                if(cbs && cbs.success){
                    cbs.success(ctx);
                }
            }else{
                if(cbs && cbs.success){
                    cbs.success(ctx);
                }
            }
        }else{
            if(cbs && cbs.error){
                cbs.error(new Error("No Path Supplied"));
            }
        }
    }catch(e){
        if(cbs && cbs.error){
            cbs.error(e);
        }
    }
}

createFolder.flux_pipe = {
    name: 'FluxPipesFS:Folders:Create',
    description: 'Creates a directory at the target Path.',
    configs:[
        {
            name: 'source',
            description: 'Source attribute to get the folder path from. [Optional]'
        },
        {
            name: 'path',
            description: 'The absolute path for the Folder to create.'
        }
    ]
};

module.exports = responseEnd;