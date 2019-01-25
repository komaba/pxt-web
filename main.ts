/**
 * Reading and writing data over a serial connection.
 */
//% weight=2 color=#3276f4 icon="\uf0c2"
namespace web {
    let n :string
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
        serial.writeLine("{\"t\":" + input.runningTime() + ",\"s\":" + control.deviceSerialNumber() + ",\"n\":\"" + id + "\",\"v\":" + value + "}");
    }

    
    function result1(): void {
        let line = serial.readLine();
        let v = line.substr(21, 10)
        if (parseInt(v) == control.deviceSerialNumber()) {
            let n = line.substr(6, 8);
        }
    }

    //% blockId=serial_result block="結果"
    export function result(){
        return n;
    }

}
