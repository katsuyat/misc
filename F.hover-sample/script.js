$(function(){

  function handleFileSelect(evt){
    evt.stopPropagation();
    evt.preventDefault();

    //jQueryの場合originalEventが必要
    var files = evt.originalEvent.dataTransfer.files;

    for(var i=0,f; f=files[i]; i++){
      //MIME-type指定
      if (!f.type.match('image.*')){
        console.log('does not image');
        continue;
      }

      var reader = new FileReader();

      reader.onload = function(event){
        var imageURI = event.target.result;
        var img = '<image class="thumb" src="' + imageURI + '" alt=""/>';
        $('.thumb-area').append(img);
      };

      reader.readAsDataURL(f);

      var output = "file名:"+ escape(f.name) +
                   "Fileサイズ"+ f.size + "Kbyte" +
                   "更新日"+ new Date(f.lastModified).toLocaleString()+
                   "<br>";
      $('#list').append(output);
      $('.dropbox-area').css('display','none');
    }
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.originalEvent.dataTransfer.dropEffect = 'copy';//ブラウザ上の表示
  }

  //dragenter or dragover
  $('.out-area').on('dragenter', function(evt){
    evt.stopPropagation();
    evt.preventDefault();
    $('.dropbox-area').show();
    console.log('[out-area] drag enter');
  });

  $('.dropbox-area').on('dragleave', function(evt){
    evt.stopPropagation();
    evt.preventDefault();
    $(this).hide();
    console.log('[dropbox-area] drag enter')
  });


  $('.dropbox-area').on('dragover', handleDragOver);
  $('.dropbox-area').on('drop', handleFileSelect);

});
