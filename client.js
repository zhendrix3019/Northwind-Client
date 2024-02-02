$(function(){
    // preload audio
    var toast = new Audio('toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();

        // Retrieve data attributes for product name and code
        var productName = $(this).data('name');
        var discountCode = $(this).data('code');

        // Update the toast with the product name and discount code
        $('#product').text(productName);
        $('#code').text(discountCode);

        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        // Show the toast
        $('#liveToast').toast({ autohide: false }).toast('show');
    });

    // Close the toast when the user presses Escape
    $(document).on('keydown', function(e) {
        if (e.key === "Escape") {
            $('#liveToast').toast('hide');
        }
    });
});