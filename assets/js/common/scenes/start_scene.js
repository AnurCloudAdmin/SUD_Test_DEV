var start_scene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "start_scene" });
    },
    init: function() {},
    preload: function() {
        //console.log("Start_Scene : Preload");

        scene_preloader('START',this);
        this.load.on('progress',function(progress){

            var progress = Math.round(progress*100);

            var bg = game.add.rectangle(0, 0, 1080, 1920, 0xffffff);
            bg.setOrigin(0,0);

            obj_list.push(bg);

            if(second_scene_loader_text)
                second_scene_loader_text.destroy();
            
            second_scene_loader_text = addTextToGame('Loading .. '+progress+'%', 540, 960, fontFamilyLangArr[sysLang], "70px", "#000000", "center", 1080, 0.5, 0.5, false);

          
            obj_list.push(second_scene_loader_text);
            


            //console.log('PROGRESS = ',progress);

        });

         this.load.on('complete', function(){
            //console.log("Load Complete");
            lang_assets_loaded = true;

             if(second_scene_loader_text)
                second_scene_loader_text.destroy();
         });

         //this.load.start();

    },
    create: function() {
         //console.log("Start_Scene : Create");
         scene_creator(0,this);

         //game.scene.start("start");
    },
    update: function() {
        scene_updater();
    }
});