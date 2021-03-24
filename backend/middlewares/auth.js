// middleware to check if the user is logged in or not
module.exports = (req, res, next) => {
  if (req.session.user == null || req.session.user == undefined) {
    req.flash('alertMessage', 'Session telah habis silahkan signin kembali!');
    req.flash('alertStatus', 'danger');
    res.redirect('/admin/login');
  } else {
    next();
  }
}
