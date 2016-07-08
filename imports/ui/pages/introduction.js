import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '/imports/ui/UIHelpers';
import { APILogs } from '/imports/api/APILogs';


Template.introduction.onRendered(function() {
    console.log('introduction onRendered');

     Template.instance().$('.ui.embed').embed();

  
})