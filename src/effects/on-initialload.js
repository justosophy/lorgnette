export default (updateOnline: boolean => void) => () => {
  updateOnline(window.navigator.onLine);

  const handleNetworkChange = () => {
    updateOnline(window.navigator.onLine);
  };

  window.addEventListener("online", handleNetworkChange, false);
  window.addEventListener("offline", handleNetworkChange, false);
};
