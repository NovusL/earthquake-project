function replay() {
            location.reload();
        }

function shake() {
            setInterval(function(){
                Magnitude = 0.002;
                addForceall();
            },100);
        }

        /*
         setInterval(function(){
            addForce();
        },500);
        */

var firstblockx = 880,
            firstblocky = 425,
            secondblockx = 1000,
            secondblocky = 485;


setInterval(function(){
    if(
        (
            (
                ( blue.position.x >= (firstblockx - 5) && blue.position.x <= (firstblockx + 5))
                || (green.position.x >= (firstblockx - 5) && green.position.x <= (firstblockx + 5))
                ||(red.position.x >= (firstblockx - 5) && red.position.x <= (firstblockx + 5))
                ||(yellow.position.x >= (firstblockx - 5) && yellow.position.x <= (firstblockx + 5))
                ||(orange.position.x >= (firstblockx - 5) && orange.position.x <= (firstblockx + 5))
            )&&(
                ( blue.position.y >= (firstblocky - 5) && blue.position.y <= (firstblocky + 5))
                || (green.position.y >= (firstblocky - 5) && green.position.y <= (firstblocky + 5))
                ||(red.position.y >= (firstblocky - 5) && red.position.y <= (firstblocky + 5))
                ||(yellow.position.y >= (firstblocky - 5) && yellow.position.y <= (firstblocky + 5))
                ||(orange.position.y >= (firstblocky - 5) && orange.position.y <= (firstblocky + 5))
            )
        )&&(
            (
                ( blue.position.x > (secondblockx - 5) && blue.position.x < (secondblockx + 5))
                || (green.position.x > (secondblockx - 5) && green.position.x < (secondblockx + 5))
                ||(red.position.x > (secondblockx - 5) && red.position.x < (secondblockx + 5))
                ||(yellow.position.x > (secondblockx - 5) && yellow.position.x < (secondblockx + 5))
                ||(orange.position.x > (secondblockx - 5) && orange.position.x < (secondblockx + 5))
            )&&(
                ( blue.position.y > (secondblocky - 5) && blue.position.y < (secondblocky + 5))
                || (green.position.y > (secondblocky - 5) && green.position.y < (secondblocky + 5))
                ||(red.position.y > (secondblocky - 5) && red.position.y < (secondblocky + 5))
                ||(yellow.position.y > (secondblocky - 5) && yellow.position.y < (secondblocky + 5))
                ||(orange.position.y > (secondblocky - 5) && orange.position.y < (secondblocky + 5))
            )
        )
    )
    {
        World.remove(world,[strengthen, BlueL, GreenI2, GreenZ, OrangeL, YellowL, blue, green, yellow, red, orange, cover, ground1, ground2, sideA, sideB]);
        var smaileface = Bodies.rectangle($(window).width()/2,500,860,970,{
            isStatic:true,
            render:{
                sprite: {
                    texture: 'img/smaileface.png',
                    xScale: 1.05,
                    yScale: 1.05
                }
            }
        });
        World.add(world, smaileface);
        document.getElementById('replaybutton').style.display = 'block';
    }

},200);


setInterval ( function(){
    if(OrangeL.position.y >= 620 || YellowL.position.y >= 620|| BlueL.position.y >= 620 || GreenZ.position.y >= 620){
            alert('COLLAPSE \n "Failed! One more time?"'),
            location.reload();
    }
},1000);


var Magnitude = 0.0002;

function addForceall() {
    var forceMagnitudeBlueL = Magnitude * BlueL.mass;
    var forceMagnitudeGreenI2 = Magnitude * GreenI2.mass;
    var forceMagnitudeBGreenZ = Magnitude * GreenZ.mass;
    var forceMagnitudeOrangeL = Magnitude * OrangeL.mass;
    var forceMagnitudeBYellowL = Magnitude * YellowL.mass;

    Body.applyForce(BlueL, BlueL.position, {
        x : (forceMagnitudeBlueL + Common.random() * forceMagnitudeBlueL) * Common.choose([1, -1]),
        y : forceMagnitudeBlueL + Common.random() * forceMagnitudeBlueL
    });
    Body.applyForce(GreenI2, GreenI2.position, {
        x : (forceMagnitudeGreenI2 + Common.random() * forceMagnitudeGreenI2) * Common.choose([1, -1]),
        y : forceMagnitudeGreenI2 + Common.random() * forceMagnitudeGreenI2
    });
    Body.applyForce(GreenZ, GreenZ.position, {
        x : (forceMagnitudeBGreenZ + Common.random() * forceMagnitudeBGreenZ) * Common.choose([1, -1]),
        y : forceMagnitudeBGreenZ + Common.random() * forceMagnitudeBGreenZ
    });
    Body.applyForce(OrangeL, OrangeL.position, {
        x : (forceMagnitudeOrangeL + Common.random() * forceMagnitudeOrangeL) * Common.choose([1, -1]),
        y : forceMagnitudeOrangeL + Common.random() * forceMagnitudeOrangeL
    });
    Body.applyForce(YellowL, YellowL.position, {
        x : (forceMagnitudeBYellowL + Common.random() * forceMagnitudeBYellowL) * Common.choose([1, -1]),
        y : forceMagnitudeBYellowL + Common.random() * forceMagnitudeBYellowL
    });

}

setInterval(function () {
    addForceall();
}, 100);

setTimeout("shake()", 10000);

        