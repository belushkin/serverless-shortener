/**
 * Web application
 */
const apiUrl = 'https://dfb01fae.us-south.apiconnect.appdomain.cloud/shortener';
const guestbook = {
  // retrieve the existing guestbook entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },
  // add a single guestbood entry
  add(url) {
    console.log('Sending', url)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/entries`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        url
      }),
      dataType: 'json',
    });
  },
  search(short) {
    console.log('Searching', short)
      return $.ajax({
          type: 'GET',
          url: `${apiUrl}/search`,
          contentType: 'application/json; charset=utf-8',
          data: JSON.stringify({
              "query": {
                  "selector": {
                      "short": short
                  }
              }
          }),
          dataType: 'json',
      });
  }
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log('Loading entries...');
    $('#entries').html('Loading entries...');
    guestbook.get().done(function(result) {
      if (!result.entries) {
        return;
      }

      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }

    // move browser to found location
    function moveToLocation(url) {
        window.location.assign(url)
    }

    // retrieve entry by short hash and if found send browser to the found location
    function searchEntryBinder() {
        $(document).on('click', '.short', function(e) {
            e.preventDefault();
            guestbook.search(
                $(this).attr('href').trim()
            ).done(function(result) {
                moveToLocation(result.url);
            }).error(function(error) {
                console.log(error);
            });
        });
    }

   // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on('submit', '#addEntry', function(e) {
    e.preventDefault();

    guestbook.add(
      $('#url').val().trim()
    ).done(function(result) {
      // reload entries
      loadEntries();
    }).error(function(error) {
      console.log(error);
    });
  });

  $(document).ready(function() {
    prepareTemplates();
    loadEntries();
    searchEntryBinder();
  });
})();
