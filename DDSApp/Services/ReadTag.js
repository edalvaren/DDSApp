
const { Controller, Tag } = require('ethernet-ip');

function ConnectPlc() {
    PLC = new Controller(); 

}

function ReadTag() {

}

//    const PLC = new Controller();
//    const spTag = new Tag("Load_Cell_Percent");
//    PLC.connect("172.16.30.55", 0).then(async () => {
//         PLC.readTag(spTag);
//    });
//    return spTag.value;
//};