var fs = require("fs");

function removeFolder(ctx, cbs){
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
            if(fs.pathExistsSync(path)){
                fs.rmdirSync(path);
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

removeFolder.flux_pipe = {
    name: 'FluxPipesFS:Folders:Remove',
    description: 'Removes the folder at the target Path.',
    configs:[
        {
            name: 'source',
            description: 'Source attribute to get the folder path from. [Optional]'
        },
        {
            name: 'path',
            description: 'The absolute path for the Folder to Remove.'
        }
    ]
};

module.exports = responseEnd;