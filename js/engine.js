
/*--------------------------------------------------------------Alias----------------------------------------------------------------------*/
var Engine=Matter.Engine,
    Render=Matter.Render,
    Bodies=Matter.Bodies,
    Body=Matter.Body,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Runner=Matter.Runner,
    World=Matter.World,
    Vertices=Matter.Vertices,
    MouseConstraint=Matter.MouseConstraint,
    Mouse=Matter.Mouse;

var engine=Engine.create(),
    world=engine.world;

var render=Render.create({
    engine:engine,
    element:document.body,
    options:{
        width:$(window).width(),
        height:$(window).height(),
        wireframes: false,
        showPositions: false,
        showCollisions: false,
        background: 'transparent'
    }
});

Engine.run(engine);
Render.run(render);



// create runner
var runner = Runner.create();
Runner.run(runner, engine);

var offset = 60,
    offsetblock = 56;
/*-------------------------------------------------------------set walls---------------------------------------------------------------------------*/

//top
var cover = Bodies.rectangle($(window).width()/2, 56, 742, 1,{
    isStatic:true,
    render:{
        fillStyle:"transparent"
    }
});
//ground
var ground1 = Bodies.rectangle($(window).width()/2, 695, 742, 1,{
    isStatic:true,
    render:{
        fillStyle:"transparent",
        lineWidth: 1
    },
    collisionFilter:{
        group:-1
    }
});

var ground2 = Bodies.rectangle($(window).width()/2, 940, 560, 2,{
    isStatic:true,
    render:{
        fillStyle:"transparent"
    }
});

var sideA = Bodies.rectangle($(window).width()/2 - 373, 374, 1, 638,{
    isStatic:true,
    render:{
        fillStyle:"transparent"
    }
});

var sideB = Bodies.rectangle($(window).width()/2 + 374, 374, 1, 638,{
    isStatic:true,
    render:{
        fillStyle:"transparent"
    }
});


/*-------------------------------------------------------------block----------------------------------------------------------------------*/
var blue = Bodies.rectangle(1200,910,offsetblock,offsetblock,{
    inertia: Infinity,
    render:{
        sprite: {
            texture: 'img/blue.png',
            xScale: 0.3,
            yScale: 0.3
        }
    },
    collisionFilter:{
        group:-1
    }
});

var green = Bodies.rectangle(1140,910,offsetblock,offsetblock,{
    inertia: Infinity,
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: 0.3,
            yScale: 0.3
        }
    },
    collisionFilter:{
        group:-1
    }
});

var yellow = Bodies.rectangle(1080,910,offsetblock,offsetblock,{
    inertia: Infinity,
    render:{
        sprite: {
            texture: 'img/yellow.png',
            xScale: 0.3,
            yScale: 0.3
        }
    },
    collisionFilter:{
        group:-1
    }
});

var red = Bodies.rectangle(1020,910,offsetblock,offsetblock,{
    inertia: Infinity,
    render:{
        sprite: {
            texture: 'img/yellow.png',
            xScale: 0.3,
            yScale: 0.3
        }
    },
    collisionFilter:{
        group:-1
    }
});

var orange = Bodies.rectangle(960,910,offsetblock,offsetblock,{
    inertia: Infinity,
    render:{
        sprite: {
            texture: 'img/orange.png',
            xScale: 0.3,
            yScale: 0.3
        }
    },
    collisionFilter:{
        group:-1
    }
});

var strengthen = Bodies.rectangle(780, 770, 250, 80,{
    isStatic: true,
    render:{
        sprite: {
            texture: 'img/strengthen.png',
            xScale: 0.9,
            yScale: 0.9
        }
    },
    collisionFilter:{
        group:-1
    }
});

/*-------------------------------------------------------------shapes---------------------------------------------------------------------------*/

var BlueLx = 940, BlueLy = 605;
var GreenI2x = 880, GreenI2y = 665;
var GreenZx = 868, GreenZy = 365;
var OrangeLx = 880, OrangeLy = 605;
var YellowLx = 852, YellowLy = 305;

var scalepara = 0.3;

world.gravity.y = 0.7;
var fricA = 0.1;


/****************************************BlueL*********************************************************/


var blue1 = Bodies.rectangle(BlueLx, BlueLy,offset,offset,{
    render:{
        sprite: {
            texture: 'img/blue.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});


var blue2 = Bodies.rectangle(BlueLx + offset, BlueLy,offset,offset,{
    render:{
        sprite: {
            texture: 'img/blue.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var blue3 = Bodies.rectangle(BlueLx + offset, BlueLy - offset,offset,offset,{
    render:{
        sprite: {
            texture: 'img/blue.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

/*************************************************************GreenI2***********************************************************************/


var green1 = Bodies.rectangle(GreenI2x, GreenI2y, offset, offset,{
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});


var green2 = Bodies.rectangle(GreenI2x + offset, GreenI2y, offset, offset,{
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});


var green3 = Bodies.rectangle(GreenI2x + 2 * offset, GreenI2y, offset, offset,{
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});


/*************************************************************GreenZ***********************************************************************/


var green4 = Bodies.rectangle(GreenZx, GreenZy,offset,offset,{
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var green5 = Bodies.rectangle(GreenZx + offset, GreenZy,offset,offset,{
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var green6 = Bodies.rectangle(GreenZx + offset, GreenZy + offset,offset,offset,{
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var green7 = Bodies.rectangle(GreenZx + 2 * offset, GreenZy + offset,offset,offset,{
    render:{
        sprite: {
            texture: 'img/green.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});



/*************************************************************OrangeL***********************************************************************/


var orange1 = Bodies.rectangle(OrangeLx, OrangeLy,offset,offset,{
    render:{
        sprite: {
            texture: 'img/orange.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});


var orange2 = Bodies.rectangle(OrangeLx, OrangeLy - offset,offset,offset,{
    render:{
        sprite: {
            texture: 'img/orange.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var orange3 = Bodies.rectangle(OrangeLx, OrangeLy - 2*offset,offset,offset,{
    render:{
        sprite: {
            texture: 'img/orange.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var orange4 = Bodies.rectangle(OrangeLx + offset, OrangeLy - 2*offset,offset,offset,{
    render:{
        sprite: {
            texture: 'img/orange.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});



/*************************************************************YellowL**************************************************************************/



var yellow1 = Bodies.rectangle(YellowLx,YellowLy,offset,offset,{
    render:{
        sprite: {
            texture: 'img/yellow.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var yellow2 = Bodies.rectangle(YellowLx + offset,YellowLy,offset,offset,{
    render:{
        sprite: {
            texture: 'img/yellow.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});

var yellow3 = Bodies.rectangle(YellowLx + offset,YellowLy - offset,offset,offset,{
    render:{
        sprite: {
            texture: 'img/yellow.png',
            xScale: scalepara,
            yScale: scalepara
        }
    }
});





var BlueL = Body.create({
    frictionAir: fricA,
    parts: [blue1, blue2, blue3]
});

var GreenI2 = Body.create({
    frictionAir: fricA,
    parts: [green1, green2, green3]
});

var GreenZ = Body.create({
    frictionAir: fricA,
    parts: [green4, green5, green6, green7]
});

var OrangeL = Body.create({
    frictionAir: fricA,
    parts: [orange1, orange2, orange3, orange4]
});

var YellowL = Body.create({
    frictionAir: fricA,
    parts: [yellow1, yellow2, yellow3]
});


/*-------------------------------------------------------------mouse-----------------------------------------------------------------------------*/

var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine,{
        mouse: mouse,
        constraint: {
            stiffness: 0.1,
            render: {
                visible: false
            }
        }
    });

/*------------------------------------------------------add items to the world-----------------------------------------------------------------------*/

World.add(world,[strengthen, BlueL, GreenI2, GreenZ, OrangeL, YellowL, blue, green, yellow, red, orange, cover, ground1, ground2, sideA, sideB, mouseConstraint]);
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: $(window).width(), y: $(window).height() }
});







