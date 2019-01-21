/**
 * Reading and writing data over a serial connection.
 */
//% weight=2 color=#002050 icon="\uf287"
namespace web {
    
    /**
     * Print a line of text to the serial port
     * @param value to send over serial
     */
    //% weight=90
    //% help=serial/write-line blockGap=8
    //% blockId=serial_writeline block="serial|write line %text"
    //% text.shadowOptions.toString=true
    function writeLine(text: string): void {
        if (!text) text = "";
        // pad data to the 32 byte boundary
        // to ensure apps receive the packet
        let r = (32 - (text.length + 2) % 32) % 32;
        serial.writeString(text);
        for (let i = 0; i < r; ++i)
            serial.writeString(" ");
        serial.writeString("\r\n");
    }
    /**
     * Write a name:value pair as a line to the serial port.
     * @param name name of the value stream, eg: x
     * @param value to write
     */
    //% weight=88 blockGap=8
    //% help=serial/write-value
    //% blockId=serial_writevalue block="serial|write value %name|= %value"
    export function writeValue(name: string, value: number): void {
        writeLine("{\"t:" + input.runningTime() + ",\"s\":" + control.deviceSerialNumber() + ",\"n\":" + name + ",\"v\":" + value);
    }

}
