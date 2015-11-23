/*
 * GET supervisord page
 */

exports.supervisord = function(params) {
	return function(req, res) {

		if (!req.session.loggedIn) {
			res.redirect('/login');
		} else if (req.session.user.Role != 'Admin') {
			res.redirect('/dashboard');
		}

		res.render('supervisord', {
			title: 'Nodervisor - All Hosts',
			session: req.session
		});
	};
};
