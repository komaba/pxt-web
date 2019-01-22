/**
 * Reading and writing data over a serial connection.
 */
//% weight=2 color=#0089f1 icon="\uf287"
namespace web {
    /**
     * Write a name:value pair as a line to the serial port.
     * @param name name of the value stream, eg: x
     * @param value to write
     */
    //% blockId=serial_writevalue block="send value %name|= %value"
    export function writeValue(name: string, value: number): void {
        serial.writeLine("{\"t:" + input.runningTime() + ",\"s\":" + control.deviceSerialNumber() + ",\"n\":\"" + name + "\",\"v\":" + value + "}");
    }

}
