import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '/imports/ui/UIHelpers';
import { APILogs } from '/imports/api/APILogs';
import './sequenceDiagrams.html'
import _ from 'lodash'; 


Template.APILogs.helpers({
    RESTCallSettings: function() {
        return {
            rowsPerPage: 10,
            responsive: true,
            autoWidth: true,
            showFilter: true,
            showColumnToggles: true,
            fields: [
                { key: 'action', label: 'Action' },
                { key: 'request', label: 'Request' }, {
                    key: 'response',
                    label: 'Response',
                    fn: function(value) {
                        return new Spacebars.SafeString('<pre id="json">' + JSON.stringify(value, undefined, 2) + '</pre>')
                    }
                },
                { key: 'createDate', label: 'Date', sortOrder: 0, sortDirection: 'descending' },
                { key: 'createdBy', label: 'Created by' },
            ]
        };
    },
    restrictedApiLogs: function(){
        return APILogs.find({}, {fields: {'response.content': 0}});
    }
})

Template.APILogs.events({
    'click .sequenceOverview' () {
        $('.ui.modal.sequenceOverview')
            // .modal({
            //     // observeChanges: true,
            //     detachable: false
            // })
            .modal('show')
            // .modal('refresh');
    },
    'click .sequenceGeneration' () {
        $('.ui.modal.sequenceGeneration')
            .modal('show')
            // .modal('refresh');

    }
})

Template.APILogs.onRendered(function() {

});
