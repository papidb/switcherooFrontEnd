const io=require("socket.io-client");
const baseurl = (window.location.origin==="http://localhost:3000")?"https://switchroo.herokuapp.com":window.location.origin;

function makeconnction(){
    const socket=io.connect(baseurl);

}
export default makeconnction

