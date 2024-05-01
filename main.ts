namespace SpriteKind {
    export const sprite = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(100 / 3)) {
        mySprite.setImage(assets.image`Tenrec0`)
    } else if (Math.percentChance(100 / 3)) {
        mySprite.setImage(assets.image`RedTenrec`)
    } else {
        mySprite.setImage(assets.image`Square`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 0, 0)
    Script = game.askForString("New script:", 24)
    if (Script.includes("getkey")) {
        pause(100)
        pauseUntil(() => controller.anyButton.isPressed())
    }
    if (Script.includes("up")) {
        mySprite.setVelocity(0, -50)
        pause(200)
        mySprite.setVelocity(0, 0)
    }
    if (Script.includes("right")) {
        mySprite.setVelocity(50, 0)
        pause(200)
        mySprite.setVelocity(0, 0)
    }
    if (Script.includes("down")) {
        mySprite.setVelocity(0, 50)
        pause(200)
        mySprite.setVelocity(0, 0)
    }
    if (Script.includes("left")) {
        mySprite.setVelocity(-50, 0)
        pause(200)
        mySprite.setVelocity(0, 0)
    }
    if (Script.includes("repeat")) {
        RepeatTimes = game.askForNumber("Times:", 3)
        Script = game.askForString("Repeat:", 24)
        for (let index = 0; index < RepeatTimes; index++) {
            if (Script.includes("getkey")) {
                pause(100)
                pauseUntil(() => controller.anyButton.isPressed())
            }
            if (Script.includes("up")) {
                mySprite.setVelocity(0, -50)
                pause(200)
                mySprite.setVelocity(0, 0)
            }
            if (Script.includes("right")) {
                mySprite.setVelocity(50, 0)
                pause(200)
                mySprite.setVelocity(0, 0)
            }
            if (Script.includes("up")) {
                mySprite.setVelocity(0, 50)
                pause(200)
                mySprite.setVelocity(0, 0)
            }
            if (Script.includes("left")) {
                mySprite.setVelocity(-50, 0)
                pause(200)
                mySprite.setVelocity(0, 0)
            }
        }
    }
    game.showLongText("New script", DialogLayout.Left)
    controller.moveSprite(mySprite)
})
let RepeatTimes = 0
let Script = ""
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Tenrec0`, SpriteKind.sprite)
scene.setBackgroundColor(1)
game.setDialogFrame(img`
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("New script", DialogLayout.Left)
controller.moveSprite(mySprite)
