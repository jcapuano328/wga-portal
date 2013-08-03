var routes = [
	{
    	desc: 'render route',
    	method: 'get',
        route: '/render',
        protected: true,
        render: 'pagetorender'
    }
];


module.exports.routes = routes;
