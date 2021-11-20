module.exports = () => {
  return (req, res, next) => {
    res.swapRedirect = (url) => {
      const to = req.get('swap-directive-url')
        || url
        || req.get('swap-referer-url')
        || req.get('referer');
      res.redirect(to);
    }

    next();
  }
}
