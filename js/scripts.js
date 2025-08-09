function copyIP(ip) {
  navigator.clipboard.writeText(ip).then(() => {
    alert('Copied IP: ' + ip);
  }).catch(() => {
    alert('Failed to copy IP. Please copy manually: ' + ip);
  });
}
