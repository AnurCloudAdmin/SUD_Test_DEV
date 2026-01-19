
var lang_assets_loaded = false;
var second_scene_loader_text;

// var lang_map= new Map();
// lang_map.set('tam','ஏற்றுகிறது...');
// lang_map.set('eng','Loading...');
// lang_map.set('hin','लदाई...');
// lang_map.set('mal','ലോഡിംഗ്...');
// lang_map.set('kan','ಹೇರಿಕೆ...'); 
// lang_map.set('tel','లోడ్...');
// lang_map.set('mar','ओझे...');
// lang_map.set('pun','ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...'); 
// lang_map.set('ben','লোড হচ্ছে...'); 
// lang_map.set('guj','લોડ કરી રહ્યું છે...');
// lang_map.set('ori','ଲୋଡିଂ...');     
// lang_map.set('ass','লোড কৰা হৈছে...');  
// lang_map.set('miz','Loading mek a ni...');
// lang_map.set('maw','Loading...');

var second_scene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "second_scene" });
    },
    init: function() {},
    preload: function() {
        //console.log("Second_Scene : Preload");
        scene_preloader('SECOND',this);        

        langAssets();

        //faceonlyimage_assets();

        this.load.on('progress',function(progress){

            var progress = Math.round(progress*100);

            var bg = game.add.sprite(0,0,'plain_bg');
            bg.setOrigin(0,0);

            obj_list.push(bg);

            if(second_scene_loader_text)
                second_scene_loader_text.destroy();
            
            second_scene_loader_text = addTextToGame("Loading..." + progress+'%', 540, 960, fontFamilyLangArr[sysLang], "70px", "#000000", "center", 1080, 0.5, 0.5, false);

          
            obj_list.push(second_scene_loader_text);


            //console.log('PROGRESS = ',progress);

        });

         this.load.on('complete', function(){
            //console.log("Load Complete");
            lang_assets_loaded = true;
         });

        //this.load.start();
    },
    create: function() {
         //console.log("Second_Scene : Create");
         scene_creator(14,this);

         //game.scene.start("start");
    },
    update: function() {
        scene_updater();
    }
});
