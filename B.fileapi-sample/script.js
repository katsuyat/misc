$(function(){

  function handleFileSelect(evt){
    var files = evt.target.files;
    var output = [];

    for(var i=0,f;f=files[i];i++){
      if (!f.type.match('image.*')){
        continue;
      }
      var filename = escape(f.name);
      var filesize = f.size / 1000 ; //Kbyte
      var filedate = new Date(f.lastModified).toLocaleString();
      
      output.push('<p>Filename:' + filename + '</p>');
      output.push('<p>Filesize:' + filesize + 'Kbytes</p>');
      output.push('<p>最終更新日:' + filedate + '</p>');
      $('#list').append(output);
    }
  }

  $('#files').on('change',handleFileSelect);

  if(!window.FileReader && !window.File &&
              !window.FileList && !window.FileBlob){
    alert("お使いのブラウザは非対応です");
  }

});
