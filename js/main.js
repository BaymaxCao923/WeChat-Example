function showLoadingToast(){
  var $loadingToast = $('#loadingToast');
  if ($loadingToast.css('display') != 'none') {
    return;
  }

  $loadingToast.show();
  setTimeout(function() {
    $loadingToast.hide();
  }, 2000);
}
