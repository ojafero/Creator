function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerHTML;
    elHtml = addTags(elHtml);
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}

function addTags(div) {
    var code = '<body style="height:100%; width: 100%">' + div + '</body></html>';
    code = '<!DOCTYPE html> <html style="height:100%; width:100%     background-size: 100% 100%; no-repeat center center fixed;     -webkit-background-size: cover;    -moz-background-size: cover;    -o-background-size: cover;    background-size: cover;" lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Creator</title> <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" ></script> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" /> <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" /> <script src="https://cdn.jsdelivr.net/npm/bulma-extensions@6.2.7/dist/js/bulma-extensions.min.js"></script> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-divider@0.2.0/dist/css/bulma-divider.min.css"></head>' + code;
    return code;
}

var fileName =  'test.html'; // You can use the .txt extension if you want


// downloadInnerHtml(fileName, 'test', 'text/html');