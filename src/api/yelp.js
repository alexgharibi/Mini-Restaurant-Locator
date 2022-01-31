import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer vAu7bgzof-B4rV-UvKjWjd1LHJLO4k5M3rQIudgcrP-R_3oO_u_yiHzYDH5cVgnOWzTBjRcTwcBmnW33q6RApjn--A8spZoSysjVm_4JgTa_EywoV2JS7xPHqqb2YXYx",
  },
});
