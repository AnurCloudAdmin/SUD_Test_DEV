var scroller_panel;
function addRidersScroller(x_pos,y_pos,width,height,COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_textscap)
{
	scroller_panel = game.rexUI.add.scrollablePanel({

		x: x_pos,//540
        y: y_pos,//1000
        width: width,//950
        height: height,//1400

        scrollMode: 0,

        background: game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY),

		slider: {
            track: game.rexUI.add.roundRectangle(0, 0, 5, 3, 0, COLOR_DARK),
            thumb: game.rexUI.add.roundRectangle(0, 0, 0, 0, 12, COLOR_LIGHT),
        },

		panel: {
        child: createRidersPanel(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_textscap),
		},

		space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
            panel: 10,
        },

	}).layout();


	obj_list.push(scroller_panel);

    scroller_panel.on('scroll', function(panel) {
        console.log('Test =' + scroller_panel.t);
        window.scrollerposition = scroller_panel.t;
        
    });

	return scroller_panel;
}

function createRidersPanel(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_textscap)
{

    // console.log(Object.keys(window.params.rider_details).length);

	var sizer = game.rexUI.add.sizer({
        
        orientation: 'y',
        space: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 0,
            item: 0 }  //300
    });
    //sizer.add(createPolicyRowImage(900, 356));

    for (i = 0; i < rider_textscap.length; i++)
    {
        sizer.add(createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_textscap[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));



    return sizer;
}



function createPolicyRowImage(w, h) {
    var sizer = game.rexUI.add.sizer({
        orientation: 'x',
        width: w,
        height: h,
        space: {
            left: 0,
            right: 0,
            top: 40,
            bottom: 0,
            item: 0
        }
    });

    sizer.addBackground(game.add.sprite(0, 0, 'product_benefit_table'));

    obj_list.push(sizer);

    return sizer;
}


function createRiderSet(COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK,rider_textscap) //,rider_value
{

    // var rider_textcap=addTextToGame(rider_textscap, 0, 0, "OpenSans-Regular", 60, "#000000", "left", 0, 0, 0, false); //

    var rider_textcap = game.add.rexBBCodeText({
                        x: 0,
                        y: 0,
                        text: rider_textscap,
                        style: {
                            fontSize: "40px",  //34px old
                            fontFamily: fontFamilyLangArr[sysLang],
                            color: "#000000",
                            align: "justify", //justify //center
                            underline: {
                                color: '#000', // css string, or number
                                thickness: 8,  //4 old
                                offset: 8
                            },
                            wrap: {
                                mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                                width: 700    //700
                            },
                        },
                    });
    // rider_textcap.setDepth(4);
    // rider_textcap.setScale(0.9);

    
  	var sizer = game.rexUI.add.sizer({
        orientation: 'y',
        space: { item: 0 }
    })
    .add(rider_textcap, { align: 'left',padding: {left: 20, right: 0, top: 20, bottom: 30} })
    return sizer;
}

