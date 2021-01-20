function bodyParser(req, res, next) {
  if (req.method === "POST") {
    req.on("data", (data) => {
      const parsed = data
        .toString("utf8")
        .split("&")
        .reduce((json, item) => {
          const [key, value] = item.split("=");
          json[key] = value;
          return json;
        }, {});
      req.body = parsed;
      next();
    });
  } else {
    next();
  }
}
