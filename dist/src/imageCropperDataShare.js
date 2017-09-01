var ImageCropperDataShare = (function () {
    function ImageCropperDataShare() {
    }
    ImageCropperDataShare.setPressed = function (canvas) {
        this.pressed = canvas;
    };
    ;
    ImageCropperDataShare.setReleased = function (canvas) {
        if (canvas === this.pressed) {
        }
    };
    ;
    ImageCropperDataShare.setOver = function (canvas) {
        this.over = canvas;
    };
    ;
    ImageCropperDataShare.setStyle = function (canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
            }
        }
        else {
            if (canvas === this.over) {
            }
        }
    };
    ;
    return ImageCropperDataShare;
}());
export { ImageCropperDataShare };
ImageCropperDataShare.share = {};
//# sourceMappingURL=imageCropperDataShare.js.map