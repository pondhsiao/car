basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 22)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 22)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
})
