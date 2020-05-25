$(document).ready(function() {

  var index = 0;  

  function ajaxCallRequest(f_method, f_url, f_data) {
    $("#dataSent").val(unescape(f_data));
    var f_contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
    $.ajax({
      url: f_url,
      type: f_method,
      contentType: f_contentType,
      dataType: 'json',
      data: f_data,
      success: function(data) {
        var jsonResult = JSON.stringify(data);
        $("#results").val(unescape(jsonResult));
      }
    });
  }
  
  $(document).on('click', '.btn-add', function(event) {
    event.preventDefault();
    var controlForm = $('.controls');
    var currentEntry = $(this).parents('.entry:first');
    var newEntry = $(currentEntry.clone()).appendTo(controlForm);
    newEntry.find('input').val('');
    controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
            
    var inputs = $('.controls .form-control');
    index = index + 1;    
    console.log("inputs[\"0\"].name", inputs["0"].name);
    console.log("inputs[\"1\"].name", inputs["1"].name);
    console.log("inputs[\"2\"].name", inputs["2"].name);
    console.log("inputs[\"3\"].name", inputs["3"].name);
    console.log("inputs[\"4\"].name", inputs["4"].name);
    console.log("inputs[\"5\"].name", inputs["5"].name);

    inputs["0"].name = 'itemslist[' + index +'][description]'
    inputs["1"].name = 'itemslist[' + index +'][quantity]'
    inputs["2"].name = 'itemslist[' + index +'][unitofmeasurment]'
    inputs["3"].name = 'itemslist[' + index +'][grossweight]'
    inputs["4"].name = 'itemslist[' + index +'][packageweight]'
    inputs["5"].name = 'itemslist[' + index +'][netweight]'
    /*
    $.each(inputs, function(item) {
      //console.log('itemslist[' + index +'][description]')
      console.log("this.name = ", this.name);
      console.log("item = ", item);
      console.log("inputs = ", inputs["1"].name);
      

      if (inputs["1"].name === 'itemslist[' + index - 1 +'][description]') {
        this.name = 'itemslist[' + index +'][description]'        
      }
      if (this.name === 'itemslist[' + index - 1 +'][quantity]') {
        this.name = 'itemslist[' + index +'][quantity]'
      }
      if (this.name === 'itemslist[' + index - 1 +'][unitofmeasurment]') {
        this.name = 'itemslist[' + index +'][unitofmeasurment]'
      }
      if (this.name === 'itemslist[' + index - 1 +'][grossweight]') {
        this.name = 'itemslist[' + index +'][grossweight]'
      }
      if (this.name === 'itemslist[' + index - 1 +'][packageweight]') {
        this.name = 'itemslist[' + index +'][packageweight]'
      }
      if (this.name === 'itemslist[' + index - 1 +'][netweight]') {
        this.name = 'itemslist[' + index +'][netweight]'
      }      
    }) 
    */
  });
  
  $(document).on('click', '.btn-remove', function(event) {
    event.preventDefault();
    $(this).parents('.entry:first').remove();
    var inputs = $('.controls .form-control');
    $.each(inputs, function(index, item) {
      item.name = 'emails[' + index + ']';
    });
  });
  
  $(document).on('click', '.btn-remove', function(event) {
    e.preventDefault();
    alert('remove');
  });

  $("#sendQueryString").click(function(event) {
    event.preventDefault();
    var form = $('#ajaxForm');
    var method = form.attr('method');
    var url = form.attr('action') + 'queryString/';
    var data = $(form).serialize();
    console.log(data);
    ajaxCallRequest(method, url, data);
  });
  $.mockjax({
    url: '/ajaxRequest/queryString/',
    type: 'POST',
    contentType: 'text/json',
    responseTime: 0,
    response: function(settings) {
      var data = settings.data;
      var arrayData = data.split('&');
      var jsonData = {}, paramvalue = '';
      for (i = 0; i < arrayData.length; i++) {
        paramvalue = arrayData[i].split('=');
        jsonData[paramvalue[0]] = paramvalue[1];
      }
      this.responseText = jsonData;
    }
  });

  $("#sendSerialized").click(function(event) {
    event.preventDefault();
    var form = $('#ajaxForm');
    var method = form.attr('method');
    var url = form.attr('action') + 'serialized/';
    var arrayData = $(form).serializeArray();
    var data = JSON.stringify(arrayData);
    
    console.log(data);
    ajaxCallRequest(method, url, data);
  });
  $.mockjax({
    url: '/ajaxRequest/serialized/',
    type: 'POST',
    contentType: 'text/json',
    responseTime: 0,
    response: function(settings) {
      var data = settings.data;
      this.responseText = data;
    }
  });

  $("#sendPlainJSon").click(function(event) {
    event.preventDefault();
    var form = $('#ajaxForm');
    var method = form.attr('method');
    var url = form.attr('action') + 'plainjson/';
    var jsonData = {};
    $.each($(form).serializeArray(), function() {
      jsonData[this.name] = this.value;
    });
    var data = JSON.stringify(jsonData);
    console.log(data);
    ajaxCallRequest(method, url, data);
  });
  $.mockjax({
    url: '/ajaxRequest/plainjson/',
    type: 'POST',
    contentType: 'text/json',
    responseTime: 0,
    response: function(settings) {
      var data = settings.data;
      this.responseText = data;
    }
  });

  $("#sendTreeJSon").click(function(event) {
    event.preventDefault();
    var form = $('#ajaxForm');
    var method = form.attr('method');
    var url = form.attr('action') + 'treejson/';
    var jsonData = $(form).serializeObject();
    console.log(jsonData);
    ajaxCallRequest(method, url, jsonData);
  });

  $.mockjax({
    url: '/ajaxRequest/treejson/',
    type: 'POST',
    contentType: 'text/json',
    responseTime: 0,
    response: function(settings) {
      var data = settings.data;
      this.responseText = data;
    }
  });
  
  $("#defaultData").click(function(event) {
    event.preventDefault();
    $('#firstname').val('Mortadelo');
    $('#lastname').val('Filemon');
    $('#address_street').val('Rua del Percebe 13');
    $('#address_city').val('Madrid');
    $('#address_zip').val('28010');
    $("[name='emails[0]']").val('superintendencia@cia.es');
  });

});


