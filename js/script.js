function showSweetAlert(message) {
    Swal.fire({
        title: '¡Mensaje Motivacional!',
        text: message,
        icon: 'success',
        confirmButtonText: '¡Gracias!',
    });
}