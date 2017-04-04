$(function(){

  function handleFileSelect(evt){
    evt.stopPropagation();
    evt.preventDefault();

    //jQueryの場合originalEventが必要
    var files = evt.originalEvent.dataTransfer.files;
    var output = [];

    for(var i=0,f; f=files[i]; i++){
      if (!f.type.match('image.*')){
        console.log('does not image');
        continue;
      }

/*
      var filename = escape(f.name);
      var filesize = f.size / 1000 ; //Kbyte
      var filedate = new Date(f.lastModified).toLocaleString();

      output.push('<p>Filename:' + filename + '</p>');
      output.push('<p>Filesize:' + filesize + 'Kbytes</p>');
      output.push('<p>最終更新日:' + filedate + '</p>');
*/
      output = "file名:"+ escape(f.name) +
                        "Fileサイズ"+ f.size + "Kbyte" +
                        "更新日"+ new Date(f.lastModified).toLocaleString()+
                        "<br>";
      $('#list').append(output);
    }
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.originalEvent.dataTransfer.dropEffect = 'copy';//なくてもよい？
  }

  $('.dropbox-area').on('dragover', handleDragOver);
  $('.dropbox-area').on('drop', handleFileSelect);
});
