function getAllFilesId(targetFolder){
  var result = {folder: [], file: []};

  var files = targetFolder.getFiles();
  while(files.hasNext()){
    var file = files.next();
    result["file"].push({name: file.getName(),fileId: file.getId(), parent: targetFolder.getId()});
  }

  var child_folders = targetFolder.getFolders();
  while(child_folders.hasNext()){
    var child_folder = child_folders.next();
    result["folder"].push({name:child_folder.getName(), fileId: child_folder.getId(), parent: targetFolder.getId()});
    result["file"] = result["file"].concat( getAllFilesId(child_folder)["file"] );
    result["folder"] = result["folder"].concat( getAllFilesId(child_folder)["folder"] );
  }
  return result;
}

function myFunction() {
  //var myFile = DriveApp.getFolderById('0B4VuvxSTkWrKTE9BdEpxNTlGbDQ');
  var rootFolderId = "0B4VuvxSTkWrKTE9BdEpxNTlGbDQ"
  rootFolder = DriveApp.getFolderById(rootFolderId);
  result = getAllFilesId(rootFolder);
  result["root"] = rootFolderId
  var doc = DocumentApp.create('result_' + rootFolderId);
  doc.getBody().appendParagraph(JSON.stringify(result));
}
