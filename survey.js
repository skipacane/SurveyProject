function mouseMove(){

    const blob = document.getElementById("blob");

    document.onpointermove = event => {
        const {clientX, clientY} = event;

        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {duration: 3000, fill: "forwards"});
    }
}