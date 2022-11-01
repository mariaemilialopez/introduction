namespace SpriteKind {
    export const Princess = SpriteKind.create()
}
function conversation () {
    player2.say("Hello!", 500)
    pause(500)
    princess.say("Hello!", 500)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    conversation()
    keepscore()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    conversation()
})
function keepscore () {
    info.changeScoreBy(1)
    music.powerUp.play()
}
let princess: Sprite = null
let player2: Sprite = null
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
    . 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2, 100, 100)
player2.setStayInScreen(true)
princess = sprites.create(sprites.castle.princessFront0, SpriteKind.Princess)
princess.setPosition(50, 50)
