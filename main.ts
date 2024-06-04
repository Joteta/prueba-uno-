input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    nave.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    Disparo = game.createSprite(nave.get(LedSpriteProperty.X), nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        Disparo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    nave.move(1)
})
let Disparo: game.LedSprite = null
let nave: game.LedSprite = null
nave = game.createSprite(2, 4)
let Enemigo_1 = game.createSprite(2, 0)
Disparo = game.createSprite(2, 0)
Enemigo_1.delete()
Disparo.delete()
game.setScore(0)
basic.forever(function () {
    if (Disparo.isTouching(Enemigo_1)) {
        Enemigo_1.delete()
        Disparo.delete()
        game.addScore(1)
    } else if (Enemigo_1.isTouching(nave)) {
        game.gameOver()
    } else if (Enemigo_1.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (Disparo.get(LedSpriteProperty.Y) == 0) {
        Disparo.delete()
    }
})
basic.forever(function () {
    basic.pause(randint(10, 10))
    if (Enemigo_1.isDeleted()) {
        Enemigo_1 = game.createSprite(randint(0, 4), 0)
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (!(Enemigo_1.isDeleted())) {
        let sprite: game.LedSprite = null
        sprite.change(LedSpriteProperty.Y, 1)
    }
})
