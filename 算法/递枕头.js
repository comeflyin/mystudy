var passThePillow = function(n, time) {
  time %= (n - 1) * 2
  return time < n ? time + 1 : n * 2 - time - 1;
};