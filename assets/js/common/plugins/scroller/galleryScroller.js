
var scroller_panel;
function addGalleryScroller(x_pos,y_pos,width,height,COLOR_PRIMARY,COLOR_LIGHT,COLOR_DARK)
{
	 scroller_panel = game.rexUI.add.scrollablePanel({
        
        x: x_pos,//540
        y: y_pos,//1000
        width: width,//950
        height: height,//1400

        scrollMode: 1,       

        scroller:{
            threshold:0,
        },
        
        panel: {
        child: createPanel(),
        },
        
        space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,

            panel: 10,
        }
        
    }).layout();

    //scroller_interval=setInterval(DisplayNewScrollImage,100);
    scroller_panel.setDepth(4);

    obj_list.push(scroller_panel);
}

function createPanel(){

    var path='./assets/images/common/product/';

    var sizer = game.rexUI.add.sizer({
        orientation: 'x',
        space: { item: 10 }
    });
    
    for(var i=0;i<scroller_items;i++)
    {
        sizer.add(addImageToScroll(path+(i+1)+'.jpeg'), // child
            { expand: true,padding: {left: 0, right: 0, top: 10, bottom: 10}, });
    }
            
    return sizer;
}

var scroller_interval;
var scroll_t=0;
var scroll_t_addition=1/scroller_items;

function DisplayNewScrollImage(change)
{
    scroll_t=scroll_t+change;

    if(scroll_t>1)
        scroll_t=0;
    if(scroll_t<0)
        scroll_t=1;

    //console.log("Display New Scroll Image ",scroll_t);
    scroller_panel.setT(scroll_t);
}

function getGalleryScrollerPanel()
{
	console.log(scroller_panel.getElement('panel'));
	console.log(scroller_panel.t);
}


var scroller_items=15;