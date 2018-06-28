$(document).ready(function() {
     //$.getJSON('/issueData', function (data) {
    //$.getJSON('http://www.mocky.io/v2/5b0ea1ef320000cb2fc19b7e', function (data) {
     $.getJSON('js/issues.json', function (data) {
        console.log('data', data);

        for(var i=0; i<data.issues.length; i++) {
            var button = '<button type=\"button\" class=\"btn btn-primary\" onclick=sendIssue("' + data.issues[i].name + '");>Отправить</button>';
            var status = '';

            if (data.issues[i].status == '100%') {
                button = '';
                status = 'class="table-success"';
            }

            $('#issues').append('<tr '+ status +'><td>' + data.issues[i].name +
                '</td><td>' + data.issues[i].name +
                '</td><td>' + data.issues[i].status +
                '</td><td>' + data.issues[i].dateCreated +
                '</td><td>' + data.issues[i].dateSend +
                '</td><td>' + data.issues[i].Sender +
                '</td><td>' + button + '</td></tr>');
        }

    });
});

function sendIssue(issueName) {
    console.log('issueName: ', issueName);
}