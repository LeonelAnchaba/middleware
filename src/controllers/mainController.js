const controller = {
	index: (req, res) => {
		res.render('index')
	},
	services: (req, res) => {
		res.render('services')
	},
	diseños: (req, res) => {
		res.render('diseños')
	}
}
 module.exports = controller