controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Victim = sprites.create(img`
        . . . . . f f b b f f . . . . . 
        . . . . f b 3 3 3 b b f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    Creepy_Neighbor = sprites.create(img`
        . . . . . . . e e e . . . . . . 
        . . . . . . e e 7 e . . . . . . 
        . . . . e e e 7 7 e e e . . . . 
        . . e e e e 7 7 e 7 e e e e . . 
        . e e e e e 7 7 7 7 e 7 e e e . 
        . e e 7 7 e e 7 7 e e 7 7 e e . 
        . . f 7 e 7 e e 7 7 7 7 7 7 . . 
        . . f f 7 7 7 7 7 7 e 7 f f . . 
        . . f f f b b e e b b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f e b b b b e f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b e e 7 e e 7 e f b e . . 
        . . e e f 7 7 e e 7 7 f e e . . 
        . . . . e 7 e e 7 7 e e . . . . 
        . . . . . e f f f f f . . . . . 
        `, SpriteKind.Player)
})
let Creepy_Neighbor: Sprite = null
let Victim: Sprite = null
game.splash(game.askForString("Please enter your name"))
