$(document).ready(function() {
    initGroups()
});

function teamsDraw(teamsData) {
    var teams = teamsData;
    console.log('teams: ', teams);

    var table = '';

    table =
        '<table class="table-bordered table-hover">' +
        '    <thead>' +
        '        <tr>' +
        '            <th><span></span></th>' +
        '            <th><span>Команда</span></th>' +
        '            <th><span>Очки</span></th>' +
        '            <th><span title="Разница забитых и пропущенных мечей">РМ</span></th>' +
        '        </tr>' +
        '    </thead>' +
        '    <tbody class="card-table__tbody">';

    for(var i=0; i<teams.length; i++) {
        table+=
            '<tr>' +
            '    <td>' +
            '        <img class="card-table__flag" src="'+ teams[i].flag +'">' +
            '    </td>' +
            '    <td>'+ teams[i].name +'</td>' +
            '    <td class="text-center">'+ teams[i].points +'</td>' +
            '    <td class="text-center">'+ teams[i].gd +'</td>' +
            '</tr>';
    }

    table += '</tbody></table>';

    return table;
}

function groupsDraw(groupData) {
    var groups = groupData.groups;

    if(groups != 'undefined' && groups.length) {
        for(var i=0; i<groups.length; i++) {
            $('.main-groups')
                .append(
                    '<div id="group-'+ groups[i].id +'" class="card card-group">' +
                    '    <div class="card-header">'+ groups[i].name +'</div>' +
                    '    <div class="card-table">' +
                    teamsDraw(groups[i].teams)+
                    '    </div>' +
                    '</div>'
                );
        }
    }
}

//Получаем данные групп в формате JSON
function getGroupsData(){
    //Тестовый JSON с данными о группах
    $.getJSON('js/groups.json', function (response) {
        groupsDraw(response);
    });
}

function initGroups() {
    getGroupsData();
}