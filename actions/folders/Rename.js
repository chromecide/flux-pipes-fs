var fs = require("fs");

function renameFolder(ctx, cbs){
    try{
        var path = null;
        var newName = null;
        if(this.cfg.path_source){
            path = ctx.getObjectValueByString(this.cfg.path_source);
        }else{
            if(this.cfg.path){
                path = this.cfg.path;
            }
        }

        if(this.cfg.name_source){
            newName = ctx.getObjectValueByString(this.cfg.name_source);
        }

        if(path && newName){
            if(fs.pathExistsSync(path)){
                fs.renameSync(path, newName);
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

renameFolder.flux_pipe = {
    name: 'FluxPipesFS:Folders:Rename',
    description: 'Renames the folder at the target Path.',
    configs:[
        {
            name: 'path_source',
            description: 'Source attribute to get the folder path from. [Optional]'
        },
        {
            name: 'path',
            description: 'The absolute path for the Folder to Rename.'
        },
        {
            name: 'name_source',
            description: "Source attribute to use as the new Foldername[Optional]"
        },
        {
            name: 'name',
            description: "The new name for the Folder[Optional]"
        }
    ]
};

module.exports = responseEnd;