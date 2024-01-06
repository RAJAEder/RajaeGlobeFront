const { backend_prefix } = require("../myVariables");

const toggleBookmarkTrip = async (tripIndex, isConnected, token) => {
  if (!isConnected) {
    return false;
  }
  const url = `${backend_prefix}users/${token}/saveTrip/${tripIndex}`;
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const data = await resp.json();

  if (!data.res) {
    return false;
  }

  return true;
};

export default toggleBookmarkTrip;
