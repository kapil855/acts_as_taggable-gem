// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import $ from 'jquery';
global.$ = jQuery;
import "css/application";
import "bootstrap";
import selectize from 'selectize';
Rails.start()
Turbolinks.start()
ActiveStorage.start()


function selectizeDemo() {
  $('#developer_skill_list').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
      return {
        value: input,
        text: input
      }
    }
  });
}
document.addEventListener("turbolinks:load", function () {selectizeDemo();});