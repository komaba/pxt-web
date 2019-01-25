/**
 * Reading and writing data over a serial connection.
 */
//% weight=2 color=#3276f4 icon="\uf0c2"
namespace web {
    //% blockId=serial_initialize block="初期化"
    export function serialInitialize(): void {
        serial.redirect(
            SerialPin.USB_TX,
            SerialPin.USB_RX,
            BaudRate.BaudRate115200
        )
    }

    /**
     * Write a name:value pair as a line to the serial port.
     * @param id name of the value stream, eg: id
     * @param value to write
     */
    //% blockId=serial_writeid_value block="IDと値を送る %id|= %value"
    export function writeValue(id: string, value: number): void {
        serial.writeLine("{\"t:\"" + input.runningTime() + ",\"s\":" + control.deviceSerialNumber() + ",\"n\":\"" + id + "\",\"v\":" + value + "}");
    }


}
