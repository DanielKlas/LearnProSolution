$(document).ready(function() {
    // Fetch the data from the server
    $.ajax({
      url: 'postgres://dovhzpdezabmys:38901ce09fc51c9a3f14f1ec375d843ff3a485ace238a5af61a4f5fdb2478c44@ec2-52-205-45-222.compute-1.amazonaws.com:5432/defk4224sfd7a0',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        // Populate the table with the retrieved data
        var tableBody = $('#data-table tbody');
        $.each(data, function(index, entry) {
          var row = $('<tr>');
          row.append($('<td>').text(entry.asset_tag));
          row.append($('<td>').text(entry.assigned_to));
          row.append($('<td>').text(entry.date_bought));
          row.append($('<td>').text(entry.date_decommissioned));
          row.append($('<td>').text(entry.device_type));
          row.append($('<td>').text(entry.operating_system));
          
          tableBody.append(row);
        });
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });

  asset_tag, assigned_to, date_bought, date_decommissioned, device_type, operating_system