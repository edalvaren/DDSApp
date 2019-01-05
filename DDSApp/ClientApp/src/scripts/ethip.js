import {Tag, Controller} from 'ethernet-ip';

const IPAddress = "172.16.30.55";
const slot = 0;
const spTag = new Tag("HMI.Tension_Control.Output_Speed");
export function getTagVal(){
    const PLC = new Controller();
    PLC.subscribe(spTag);
    PLC.connect(IPAddress, slot).then(() => {
        PLC.scan_rate = 100;
        PLC.scan();
    });
}