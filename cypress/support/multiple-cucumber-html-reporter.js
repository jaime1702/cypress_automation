const report = require('multiple-cucumber-html-reporter');
const os = require('os');
var today = new Date();
var date =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time =
  today.getHours() + 'h' + today.getMinutes() + 'm' + today.getSeconds() + 's';
var dateTime = date + '_' + time;

report.generate({
  jsonDir: 'cypress/cucumber-json/',
  reportPath: 'cypress/reports/MultipleReport_' + dateTime + '.html',
  displayReportTime: true,
  metadata: {
    device: 'Local test machine',
    platform: {
      name: os.platform(),
      version: os.version(),
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Gestão Legacy' },
      {
        label: 'Execution Start Time',
        value:
          today.getHours() +
          'h' +
          today.getMinutes() +
          'm' +
          today.getSeconds() +
          's',
      },
      {
        label: 'Execution End Time',
        value:
          today.getHours() +
          'h' +
          today.getMinutes() +
          'm' +
          today.getSeconds() +
          's',
      },
    ],
  },
});
