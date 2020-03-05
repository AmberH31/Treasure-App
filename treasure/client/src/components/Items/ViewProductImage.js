import React, { useEffect, useState } from "react"
import API from "./../utils/API"
const ViewProductImage = ({ itemID }) => {
    const [img, setImg] = useState("");
    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));

        bytes.forEach((b) => binary += String.fromCharCode(b));

        return window.btoa(binary);
    };
    useEffect(() => {
        fetch(`http://localhost:8080/api/product/photo/${itemID}`, { headers: { "Cache-Control": "no-cache" }, method: "GET", mode: "cors" }).then((res) => {
            res.arrayBuffer().then((buffer) => {
                var base64Flag = 'data:image/jpeg;base64,';
                var imageStr = arrayBufferToBase64(buffer);
                setImg(base64Flag + imageStr)
            })
        })
    }, [])

    return (<img style={{ width: "100%" }} src={img} />)
}

export default ViewProductImage;