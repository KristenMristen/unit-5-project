controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Huck = sprites.create(img`
        ........fffffffff.............
        ....ffffeeeeeeeeeffff.........
        ....ffffeeeeeeeeeffff.........
        ..ffffeeeeeeeeeeeeeffff.......
        ..ffffeeeeeeeeeeeeeffff.......
        ffddddff44eeeeeeeffddffff.....
        ffddddff44eeeeeeeffddffff.....
        ffddff444444eeeeeffdddddd.....
        ffddff444444eeeeeffdddddd.....
        ddffff444444444eeeeffffff.....
        ddffff444444444eeeeffffff.....
        ff44ee4444444444444ee44ff.....
        ff44ee4444444444444ee44ff.....
        ff4444ffff44444ffff4444ff.....
        ff4444ffff44444ffff4444ff.....
        ffee44444444444444444eeff.....
        ffee44444444444444444eeff.....
        ..ffee4444bbbbb4444eeff.......
        ..ffee4444bbbbb4444eeff.......
        ..ffffee444444444eeffff.......
        ..ffffee444444444eeffff.......
        ee44ffbb111111111bbff44ee.....
        ee44ffbb111111111bbff44ee.....
        44ddff1111111111111ffdd44.....
        44ddff1111111111111ffdd44.....
        4444ff6666666666666ff4444.....
        4444ff6666666666666ff4444.....
        ......fffffffffffff...........
        ......fffffffffffff...........
        ......ffff.....ffff...........
        `, SpriteKind.Player)
    Irina = sprites.create(img`
        ...........ffffffff...........
        .......ffffffeeeeffffff.......
        .......ffffffeeeeffffff.......
        .....ffffffeeeeeeeeffffff.....
        .....ffffffeeeeeeeeffffff.....
        ...ffffffeeeeeeeeeeeeffffff...
        ...ffffffeeeeeeeeeeeeffffff...
        ...ffffeebbeeeeeeeeeeeeeeff...
        ...ffffeebbeeeeeeeeeeeeeeff...
        ...ffeebbeeeeeeeeeeeeeeeeff...
        ...ffeebbeeeeeeeeeeeeeeeeff...
        ...ffffeeeeeeeeeeeeeeeeffff...
        ...ffffeeeeeeeeeeeeeeeeffff...
        .ffffee44bbff4444ffbb44eeffff.
        .ffffee44bbff4444ffbb44eeffff.
        .ffeeee4411ff4444ff1144eeeeff.
        .ffeeee4411ff4444ff1144eeeeff.
        ...ffee444444bbbb444444eeff...
        ...ffee444444bbbb444444eeff...
        .....ffee444444444444eeff.....
        .....ffee444444444444eeff.....
        ...ee44ffaaaaaaaaaaaaff44ee...
        ...ee44ffaaaaaaaaaaaaff44ee...
        ...44ddffaaaaaaaaaaaaffdd44...
        ...44ddffaaaaaaaaaaaaffdd44...
        ...4444ffbbbb6666bbbbff4444...
        ...4444ffbbbb6666bbbbff4444...
        .........ffffffffffff.........
        .........ffffffffffff.........
        .........ffff....ffff.........
        `, SpriteKind.Player)
    Margot = sprites.create(img`
        .........ffffbbbffff..........
        .......ffbb33333bbbbff........
        .......ffbb33333bbbbff........
        .....ffee33333333333eeff......
        .....ffee33333333333eeff......
        ...ffbb333333333333333bbff....
        ...ffbb333333333333333bbff....
        ...ff3333333333333333333ff....
        ...ff3333333333333333333ff....
        .ff3333eebb33eee33bbee3333ff..
        .ff3333eebb33eee33bbee3333ff..
        .ff3333ffffeeeeeeeffff3333ff..
        .ff3333ffffeeeeeeeffff3333ff..
        .ffbbbbffbbffeeeffbbffbbbbff..
        .ffbbbbee11ff444ff11eebbbbff..
        .ffbbbbee11ff444ff11eebbbbff..
        fffbbbbff44444444444ffbbbbfff.
        fffbbbbff44444444444ffbbbbfff.
        fbbbbffffffeeeeeeeffffffbbbbf.
        fbbbbffffffeeeeeeeffffffbbbbf.
        .ffeeeeffbbdddddddbbffeeeeff..
        .ffeeeeffbbdddddddbbffeeeeff..
        ...ee44ccdddddddddddcc44ee....
        ...ee44ccdddddddddddcc44ee....
        ...eeffbbddbbdbbddbbbbffee....
        ...eeffbbddbbdbbddbbbbffee....
        .....ffff11dd1dd11ddffff......
        .....ffff11dd1dd11ddffff......
        .........ffffbbbffff..........
        ..............................
        `, SpriteKind.Player)
    Conrad = sprites.create(img`
        .............eeeeee...........
        ...........eeee77ee...........
        ...........eeee77ee...........
        .......eeeeee7777eeeeee.......
        .......eeeeee7777eeeeee.......
        ...eeeeeeee7777ee77eeeeeeee...
        ...eeeeeeee7777ee77eeeeeeee...
        .eeeeeeeeee77777777ee77eeeeee.
        .eeeeeeeeee77777777ee77eeeeee.
        .eeee7777eeee7777eeee7777eeee.
        .eeee7777eeee7777eeee7777eeee.
        ...ff77ee77eeee777777777777...
        ...ff77ee77eeee777777777777...
        ...ffff777777777777ee77ffff...
        ...ffff777777777777ee77ffff...
        ...ffffffbbbbeeeebbbbffffff...
        ...ffffffbbbbeeeebbbbffffff...
        ...ffffff11ffbbbbff11ffffff...
        ...ffffff11ffbbbbff11ffffff...
        .....ffffeebbbbbbbbeeffff.....
        .....ffffeebbbbbbbbeeffff.....
        .....eeeeffeeeeeeeeffeeee.....
        .....eeeeffeeeeeeeeffeeee.....
        ...eebbeeee77eeee77eeffbbee...
        ...eebbeeee77eeee77eeffbbee...
        ...eeeeff7777eeee7777ffeeee...
        ...eeeeff7777eeee7777ffeeee...
        .......ee77eeee7777eeee.......
        .......ee77eeee7777eeee.......
        .........eeffffffffff.........
        `, SpriteKind.Player)
    Briar = sprites.create(img`
        ..ffaaff..ffffffff..ffaaff....
        ..ffaaff..ffffffff..ffaaff....
        ffffccbbaaccccccccaabbccffff..
        ffffccbbaaccccccccaabbccffff..
        aabbccccbbccccccccbbccccbbaa..
        aabbccccbbccccccccbbccccbbaa..
        ffff33cc33cccccccc33cc33ffff..
        ffff33cc33cccccccc33cc33ffff..
        ..ff3333cccccccccccc3333ff....
        ..ff3333cccccccccccc3333ff....
        ..ffcccccccc4444ccccccccff....
        ..ffcccccccc4444ccccccccff....
        ..ffcccccc44444444ccccccff....
        ..ffcccccc44444444ccccccff....
        ..ffccccbbff4444ffbbccccff....
        ..ffff4411ff4444ff1144ffff....
        ..ffff4411ff4444ff1144ffff....
        ....ffff444444444444ffff......
        ....ffff444444444444ffff......
        ....eeffee44444444eeffee......
        ....eeffee44444444eeffee......
        ..ee44ffbb33333333bbff44ee....
        ..ee44ffbb33333333bbff44ee....
        ..44ddff333333333333ccdd44....
        ..44ddff333333333333ccdd44....
        ..4444ff666666666666ff4444....
        ..4444ff666666666666ff4444....
        ........ffffffffffff..........
        ........ffffffffffff..........
        ........ffff....ffff..........
        `, SpriteKind.Player)
    Jasper = sprites.create(img`
        ........ffffffff..............
        ....ffffffffffffffff..........
        ....ffffffffffffffff..........
        ..ffffffffffffccffffff........
        ..ffffffffffffccffffff........
        ffffffffffffccccffffffcc......
        ffffffffffffccccffffffcc......
        ffffffccffffffffffffffcc......
        ffffffccffffffffffffffcc......
        ccccccffffffeeeeffffcccc......
        ffffffffffeeeeffffccccff......
        ffffffffffeeeeffffccccff......
        ffffffbbffeeeeffbbffffff......
        ffffffbbffeeeeffbbffffff......
        ..ff4411ff4444ff1144ff........
        ..ff4411ff4444ff1144ff........
        ..ffee444444444444eeff........
        ..ffee444444444444eeff........
        ..ffffffeeeeeeeeffffff........
        ffeeffbb77777777bbffeeff......
        ffeeffbb77777777bbffeeff......
        ee44ff777777777777ff44ee......
        ee44ff777777777777ff44ee......
        eeeeff666666666666ffeeee......
        eeeeff666666666666ffeeee......
        ......ffffffffffff............
        ......ffffffffffff............
        ......ffff....ffff............
        ..............................
        ..............................
        `, SpriteKind.Player)
    Sylvia = sprites.create(img`
        .........ffffffff.............
        .....ffff55555555ffff.........
        .....ffff55555555ffff.........
        ...ff5555555555555555ff.......
        ...ff5555555555555555ff.......
        .ff55555555555555555555ff.....
        .ff55555555555555555555ff.....
        .ff555555ddbbbbdd555555ff.....
        .ff555555ddbbbbdd555555ff.....
        f555555bb44444444bb555555f....
        f555555bb44444444bb555555f....
        f5555cccc44444444cccc5555f....
        f5555cccc44444444cccc5555f....
        f5555ffbbff4444ffbbff5555f....
        f5555ffbbff4444ffbbff5555f....
        f55ff4444ff4444ff4444ff55f....
        f55ff4444ff4444ff4444ff55f....
        .ffbbff444433dd4444ffbbff.....
        .ffbbff444433dd4444ffbbff.....
        .ffeeffee44444444eeffeeff.....
        .ffeeffee44444444eeffeeff.....
        .ee44ff669999999966ff44ee.....
        .ee44ff669999999966ff44ee.....
        .44ddcc999999999999ccdd44.....
        .44ddcc999999999999ccdd44.....
        .44ffbb33bb33bb33bbbbff44.....
        .44ffbb33bb33bb33bbbbff44.....
        ...ffff33bb33bb3333ffff.......
        ...ffff33bb33bb3333ffff.......
        .......ffffbbbbffff...........
        `, SpriteKind.Player)
    Marie_Antoinette = sprites.create(img`
        ...444444........444444.......
        ...444444........444444.......
        .44555555ee....ee55555544.....
        .44555555ee....ee55555544.....
        45555555555eeee555555555544...
        45555555555eeee555555555544...
        455554444555555554444555544...
        455554444555555554444555544...
        e554444555555555555444455ee...
        e554444555555555555444455ee...
        e554444555555555555444455ee...
        .eeee5555555555555555eeee.....
        .eeee5555555555555555eeee.....
        ...ee55ff55555555ff55ee.......
        ...ee55ff55555555ff55ee.......
        ...ff5555554444555555ff....fff
        ...ff5555554444555555ff....fff
        ...ff445555ffff555577ff..ff55f
        ...ff445555ffff555577ff..ff55f
        .....ff7777777777774444ff5555f
        .....ff7777777777774444ff5555f
        .....ff7777777777774444ff5555f
        .....ff44555555555555444455ff.
        .....ff44555555555555444455ff.
        .....ff5555555555445555ffff...
        .....ff5555555555445555ffff...
        .....ff55ffffff55ffff55ff.....
        .....ff55ffffff55ffff55ff.....
        .....ffff....ffff....ffff.....
        .....ffff....ffff....ffff.....
        `, SpriteKind.Player)
})
let Marie_Antoinette: Sprite = null
let Sylvia: Sprite = null
let Jasper: Sprite = null
let Briar: Sprite = null
let Conrad: Sprite = null
let Margot: Sprite = null
let Irina: Sprite = null
let Huck: Sprite = null
let askName = game.askForString("Please enter your name")
let Adelaide = sprites.create(img`
    ..............................
    .........ffffffffffff.........
    .........ffffffffffff.........
    .......ff116666111166ff.......
    .......ff116666111166ff.......
    .....ff1166666666661166ff.....
    .....ff1166666666661166ff.....
    .....ff666666ffff666611ff.....
    .....ff666666ffff666611ff.....
    .....ff66ffffddddffff66ff.....
    .....ff66ffffddddffff66ff.....
    ...ff66ffddffddddffddff66ff...
    ...ff66ffddffddddffddff66ff...
    ...ff66ffdddd3322ddddff66ff...
    ...ff66ffdddd3322ddddff66ff...
    ...ff6666ffddddddddff6666ff...
    ...ff6666ffddddddddff6666ff...
    fff6666ff33ffffffff33ff6666ff.
    fff6666ff33ffffffff33ff6666ff.
    ...ffffdd335533335533ddffff...
    ...ffffdd335533335533ddffff...
    ...ffddddff33555533ffddddff...
    ...ffddddff33555533ffddddff...
    .....ffff333333333333ffff.....
    .....ffff333333333333ffff.....
    .....ff3333553333553333ff.....
    .....ff3333553333553333ff.....
    .....ffffffffffffffffffff.....
    .....ffffffffffffffffffff.....
    .........ffff....ffff.........
    `, SpriteKind.Player)
Adelaide.setPosition(72, 85)
Adelaide.sayText("PLEASE DETECTIVE " + askName + " YOU NEED TO FIND THE KILLER OF MY DAUGHTER!!")
