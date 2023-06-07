// Sanitize and validate asset tag
function sanitizeAssetTag(assetTag) {
  // Regex pattern for asset tag: anystring-anystring-number
  const assetTagPattern = /^[a-zA-Z]+-[a-zA-Z]+-\d{2}$/;

  return assetTag.match(assetTagPattern) ? assetTag.trim() : null;
}

// Sanitize and validate assigned to
function sanitizeAssignedTo(assignedTo) {
  // Regex pattern for assigned to: name without numbers or special characters
  const assignedToPattern = /^[a-zA-Z\s]+$/;

  return assignedTo.match(assignedToPattern) ? assignedTo.trim() : null;
}

// Sanitize and validate date bought and date decommissioned
function sanitizeDate(date) {
  // Regex pattern for date in the format "YYYY-MM-DD"
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  return date.match(datePattern) ? date.trim() : null;
}

// Sanitize and validate device type and operating system
function sanitizeString(str) {
  // Regex pattern for a string without special characters
  const stringPattern = /^[a-zA-Z\s]+$/;

  return str.match(stringPattern) ? str.trim() : null;
}